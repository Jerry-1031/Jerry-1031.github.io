---
title: 提取Mekanism模组中的能量立方模型
date: 2026-08-10
updated: 2026-08-10
categories:
  - 折腾
tags:
  - Python
  - 提取
  - MC
---

Minecraft 中的 Mekanism（通用机械）是笔者最喜欢的 MC 模组之一。笔者尤其喜欢里面的建模，因此本文以能量立方为例，将其提取为通用可编辑的 3D 模型格式。

<!-- more -->

使用如下 Python 程序，放置在模组 .jar 文件解压后的子目录中，运行即可。

```python
import json
import shutil
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets" / "mekanism"
OUTPUT = Path.home() / "Model"
TIERS = ("basic", "advanced", "elite", "ultimate", "creative")
TIER_COLORS = {
    "basic": (95, 255, 184),
    "advanced": (255, 128, 106),
    "elite": (75, 248, 255),
    "ultimate": (247, 135, 255),
    "creative": (88, 88, 88),
}

PARTS = (
    "frame",
    "bottomLEDs",
    "bottomPort",
    "topLEDs",
    "topPort",
    "frontLEDs",
    "frontPort",
    "backLEDs",
    "backPort",
    "rightLEDs",
    "rightPort",
    "leftLEDs",
    "leftPort",
)

FACE_VERTICES = {
    "north": ((0, 0, 0), (0, 1, 0), (1, 1, 0), (1, 0, 0)),
    "south": ((1, 0, 1), (1, 1, 1), (0, 1, 1), (0, 0, 1)),
    "west": ((0, 0, 1), (0, 1, 1), (0, 1, 0), (0, 0, 0)),
    "east": ((1, 0, 0), (1, 1, 0), (1, 1, 1), (1, 0, 1)),
    "down": ((0, 0, 1), (0, 0, 0), (1, 0, 0), (1, 0, 1)),
    "up": ((0, 1, 0), (0, 1, 1), (1, 1, 1), (1, 1, 0)),
}


def read_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def texture_file(resource: str) -> Path:
    namespace, relative = resource.split(":", 1)
    if namespace != "mekanism":
        raise ValueError(f"Unsupported texture namespace: {resource}")
    return ASSETS / "textures" / f"{relative}.png"


def uv_corners(face: dict) -> list[tuple[float, float]]:
    u0, v0, u1, v1 = (float(value) for value in face.get("uv", (0, 0, 16, 16)))
    # Minecraft V coordinates start at the top; OBJ starts at the bottom.
    corners = [
        (u0 / 16, 1 - v1 / 16),
        (u0 / 16, 1 - v0 / 16),
        (u1 / 16, 1 - v0 / 16),
        (u1 / 16, 1 - v1 / 16),
    ]
    turns = (int(face.get("rotation", 0)) // 90) % 4
    return corners[turns:] + corners[:turns]


def point(
    bounds_min: list[float], bounds_max: list[float], corner: tuple[int, int, int]
) -> tuple[float, float, float]:
    raw = tuple(bounds_max[i] if corner[i] else bounds_min[i] for i in range(3))
    # Center X/Z at zero, place the model on Y=0, and make one block one unit.
    return ((raw[0] - 8) / 16, raw[1] / 16, (raw[2] - 8) / 16)


def export_tier(base: dict, tier: str) -> None:
    tier_data = read_json(ASSETS / "models" / "block" / "energy_cube" / f"{tier}.json")
    textures = dict(base["textures"])
    textures.update(tier_data["textures"])
    material_names = {
        slot: resource.rsplit("/", 1)[-1]
        for slot, resource in textures.items()
        if slot != "particle"
    }

    vertices: list[tuple[float, float, float]] = []
    texcoords: list[tuple[float, float]] = []
    records: list[str] = []
    vertex_index = 1
    texcoord_index = 1

    for part in PARTS:
        for element in base.get(part, []):
            records.append(f"g {element.get('name', part)}")
            for face_name, face in element.get("faces", {}).items():
                corners = FACE_VERTICES[face_name]
                face_vertices = [
                    point(element["from"], element["to"], corner) for corner in corners
                ]
                face_uvs = uv_corners(face)
                vertices.extend(face_vertices)
                texcoords.extend(face_uvs)
                material = material_names[face["texture"].lstrip("#")]
                records.append(f"usemtl {material}")
                refs = [f"{vertex_index + i}/{texcoord_index + i}" for i in range(4)]
                records.append("f " + " ".join(refs))
                vertex_index += 4
                texcoord_index += 4

    obj_path = OUTPUT / f"{tier}_energy_cube.obj"
    mtl_path = OUTPUT / f"{tier}_energy_cube.mtl"
    obj_lines = [
        "# Mekanism Energy Cube, converted from the mod's custom JSON model",
        f"mtllib {mtl_path.name}",
        "o energy_cube",
    ]
    obj_lines.extend(f"v {x:.6f} {y:.6f} {z:.6f}" for x, y, z in vertices)
    obj_lines.extend(f"vt {u:.6f} {v:.6f}" for u, v in texcoords)
    obj_lines.extend(records)
    obj_path.write_text("\n".join(obj_lines) + "\n", encoding="ascii")

    mtl_lines = ["# Mekanism Energy Cube materials"]
    for slot, resource in textures.items():
        if slot == "particle":
            continue
        source = texture_file(resource)
        destination = OUTPUT / "textures" / source.name
        shutil.copy2(source, destination)
        name = material_names[slot]
        relative = f"textures/{source.name}"
        mtl_lines.extend(
            (
                "",
                f"newmtl {name}",
                "Ka 1.000 1.000 1.000",
                "Kd 1.000 1.000 1.000",
                "Ks 0.000 0.000 0.000",
                f"map_Kd {relative}",
                f"map_d {relative}",
            )
        )
    mtl_path.write_text("\n".join(mtl_lines) + "\n", encoding="ascii")


def export_energy_core(tier: str) -> None:
    """Export the runtime ModelEnergyCore cube, centered inside the block."""
    # Standard Minecraft entity-cube UV layout for a 16x16x16 box on a 32x32 texture.
    # U values beyond 32 intentionally wrap, matching Minecraft's repeat sampling.
    uv_rects = {
        "up": (16, 0, 32, 16),
        "down": (32, 0, 48, 16),
        "west": (0, 16, 16, 32),
        "north": (16, 16, 32, 32),
        "east": (32, 16, 48, 32),
        "south": (48, 16, 64, 32),
    }
    bounds_min = (-0.2, 0.3, -0.2)
    bounds_max = (0.2, 0.7, 0.2)
    vertices: list[tuple[float, float, float]] = []
    texcoords: list[tuple[float, float]] = []
    faces: list[str] = []
    index = 1

    for face_name, corners in FACE_VERTICES.items():
        for corner in corners:
            vertices.append(
                tuple(bounds_max[_] if corner[_] else bounds_min[_] for _ in range(3))
            )
        u0, v0, u1, v1 = uv_rects[face_name]
        texcoords.extend(
            (
                (u0 / 32, 1 - v1 / 32),
                (u0 / 32, 1 - v0 / 32),
                (u1 / 32, 1 - v0 / 32),
                (u1 / 32, 1 - v1 / 32),
            )
        )
        faces.append("f " + " ".join(f"{index + i}/{index + i}" for i in range(4)))
        index += 4

    obj_name = f"{tier}_energy_core.obj"
    mtl_name = f"{tier}_energy_core.mtl"
    texture_name = f"energy_core_{tier}.png"
    obj_lines = [
        "# Mekanism runtime Energy Core, converted from ModelEnergyCore",
        f"mtllib {mtl_name}",
        f"o {tier}_energy_core",
    ]
    obj_lines.extend(f"v {x:.6f} {y:.6f} {z:.6f}" for x, y, z in vertices)
    obj_lines.extend(f"vt {u:.6f} {v:.6f}" for u, v in texcoords)
    obj_lines.extend((f"usemtl energy_core_{tier}", "g energy_core", *faces))
    (OUTPUT / obj_name).write_text("\n".join(obj_lines) + "\n", encoding="ascii")

    mtl_lines = [
        "# Mekanism Energy Core material",
        f"newmtl energy_core_{tier}",
        "Ka 1.000 1.000 1.000",
        "Kd 1.000 1.000 1.000",
        "Ks 0.000 0.000 0.000",
        f"map_Kd textures/{texture_name}",
        f"map_d textures/{texture_name}",
    ]
    (OUTPUT / mtl_name).write_text("\n".join(mtl_lines) + "\n", encoding="ascii")

    source = Image.open(ASSETS / "render" / "energy_core.png").convert("RGBA")
    red, green, blue = TIER_COLORS[tier]
    pixels = [
        (r * red // 255, g * green // 255, b * blue // 255, a)
        for r, g, b, a in source.getdata()
    ]
    source.putdata(pixels)
    source.save(OUTPUT / "textures" / texture_name)


if __name__ == "__main__":
    OUTPUT.mkdir(parents=True, exist_ok=True)
    (OUTPUT / "textures").mkdir(exist_ok=True)
    base = read_json(ASSETS / "models" / "block" / "energy_cube" / "base.json")
    for tier in TIERS:
        export_tier(base, tier)
        export_energy_core(tier)
    print(f"Exported {len(TIERS)} Energy Cube and Energy Core OBJ models to {OUTPUT}")
```