---
title: GeekPie 2026 招新赛出题记
date: 2026-10-01
updated: 2026-10-01
categories:
  - 笔记
tags:
  - CTF
  - Puzzlehunt
  - 招新
  - 出题
---
作为 GeekPie 社团成员，笔者参与了 2026 招新赛的部分筹备与出题工作。本文是笔者在招新赛中个人出的几道题的一些想法与碎碎念。

比赛链接：[Hello GeekPie_ 2026](https://acm.shanghaitech.edu.cn/d/G3eKP1E_2026/contest/6aab72a558153e3a926d7afc)

<!-- more -->

# 全新的密码输入方式™

作为本次比赛的 B 题，本题的定位应该是最简单的几道题之一。在 0:12:21 时迎来了首杀。

因为比赛的定位是面向全体新生和一些想加入或是体验比赛乐趣的老生，笔者在出这道题的时候并没有在题干中隐藏太多信息，预期解题路径也很明显：光看图片肯定太麻烦以至于看不出来，因此提供了 pdf 文件，将 pdf 文件下载下来后，用二进制编辑器打开，可以看到一串直接由可见的数字存储的坐标，将坐标提取出来稍微做一下转换即可读出两个 flag 的内容。

同时，为了照顾真的没想到 pdf 文件中也能看到数字坐标的人，flag1 的提取特意没有加难度，直接做一个对数变换，做题者仅看图片去数也可以做出来。flag2 则增加了一些区分度，笔者特意在题干中提到 "在密码中插入了一些重复字符"，这也导致了必须要通过打开 pdf 的方式才能做出来。

同时，也在笔者意料之中的是，真的有人在 flag2 中仅看图片一个一个数，数了半天怎么交也交不对，最后喂给 AI 才发现 pdf 中是可以直接提取各个图形的位置信息的。也算让大家学到一些关于 pdf 的东西，本题的作用也是比较符合预期的。

赛后笔者采访了几位同学，普遍反馈是本题较为简单；观察排行榜也可以发现，本题是通过人数第二高的题，仅次于 A 题。事实上笔者也没有做防 Agent 处理，直接让大运碾过去也未尝不可（会用 AI 的人一般也能知道这题的预期解就是了）。更加有难度或者有区分度的题目就留给其他人去出了，笔者比较喜欢出一点类似于这种小清新的题，让更多人体会到这种不难但是需要对电波的题目（还有下面那个题）的快乐。

本题目灵感来源于 [geekgame-5th misc-paper](https://github.com/PKU-GeekGame/geekgame-5th/tree/master/official_writeup/misc-paper) 题，本次比赛笔者出了一个弱化版；里面的防 Agent 机制因为确实没啥用，所以直接去掉了。其实也没啥人参考这题，因为太简单，Agent 可以直接秒掉，并没有什么参考价值。

# 拼凑的断章

本次比赛笔者最满意的一道独立原创题。作为 H 题，笔者稍微有点高估了本题的难度，也低估了选手（更有可能是 Agent）的实力水平。在 0:20:16 迎来了首杀。

预期解大概是发现图片可以下载，使用二进制编辑器检查文件头和文件尾后发现图片同时又是一个压缩包，直接将后缀名改为 .zip 后解压缩发现内层又是一个类似的图片+压缩包，再解压缩……如此套了 64 层，最内层的 txt 里写了个 No flag here! 让选手考虑回看图片中的隐藏信息。发现每层的 96x96 图片中隐写了猪圈加密后的字母，按图片顺序提取出来即得到 flag1；又看到最外层的聊天记录暗示 "png=0, jpg=1" 考虑每个图片的格式不一样，将 64 张图片的格式按位作为二进制串转文字，即得到 flag2。

赛前测试时，原来字母是直接写在每层压缩的图片中的，没有做任何加密；比赛开始前一天，笔者使用 Agent 测试了一下题目，发现只需要 3~5 分钟即可把这题秒掉，两个 flag 都解出来。想来想去，在赛前三小时，笔者想到考虑引入 Puzzlehunt 中的各种加密方式中的一种，考虑了摩斯、旗语、猪圈等等。因为摩斯已经在 C 题第一个线下海报题用过了，旗语并没有那么好表现，所以将各个层中隐写的字母换成了猪圈加密。本以为这样做能稍微增大一些题目的难度，结果还是被 Agent 轻松秒掉了。

作为良心出题人，笔者还是在为传统方法做题的选手考虑，怕选手看不出来本题使用了猪圈加密，所以赛前两小时在最外层聊天记录图片的左上角隐写了 PIGPEN（猪圈），同时在题干中也加入了（表情：猪写字）等提示。

关于 flavor text（题干）的写作，笔者在这道题中有一些心得：作为类 Puzzlehunt 的 CTF 题目，笔者争取做到 flavor text 中每一段都有用。若想做到这点，则需要两个回扣：一是 png 和 jpg 与 0 和 1 的对应关系，二是将二进制串转为普通字符串。

对于前者，笔者早有预谋：在今年的五月份，笔者联想到过往 Puzzlehunt 中不乏用聊天记录隐藏信息的题目，就产生了这样的一个 idea，使用两人的对话记录来隐藏这一个信息。其实也算不上隐藏，笔者预期是选手初看聊天记录会不明觉厉；直到发现每层图片格式不一样，瞬间意识到，还可以这么提取！（不过大部分选手应该还是通过 Agent 直接秒掉了，这样不就失去了做题的意义了吗……笔者仍然抱有选手与出题者对上脑电波那一瞬间的快感的希望的）

对于后者，在赛前写作 flavor text 时，笔者便产生了 "使用用户与 AI 的聊天记录来作为题干" 的想法，想来想去没想到比这个更优秀的题干，决定就用这个了。于是很快的把题出好，回扣做好。因为是猪圈加密，图形中并不包含字母的大小写信息，所以笔者又在最后加了一句 "其中对于本题，`flag内容` 仅包含大写字母 `A` - `Z` 和下划线 `_`"，也算是另外的回扣了。

下面是笔者的最初草稿与想法，记在手机的备忘录里。随时往备忘录里写一些想法可能是很好的策略，笔者的很多出题想法与碎碎念都是躺在床上时突然想到的，其实本题也不例外。

> Main：
> 在一张图片里用多种隐写方式
> 
> 加文件尾信息
> 图片元信息显示flag
> 图片加亮度显示flag
> 改后缀为zip里藏文件，文件内有flag
> zip元信息有flag
> 
> Extra：
> zip中也是一个图片，图片又是zip，…
> 有穷，但很多；每个图片中藏一个字符，共1000个…人力不现实，需要程序自主识别
> 
> 每层后缀名不一样！png=0/jpg=1编码为0-1串藏flag
> 
> User: How do I encode an ASCII string into a binary string in Python?

赛后统计发现，大多数人都把 flag2 交在前面，flag1 交在后面，这与笔者的预期并不算相同；初步猜测可能是 Agent 相比于图片中的信息，能够更快的意识到图片具有不同的格式，从而更快的发现 flag2。

# 关于 GEEKPIE BOXXX

G 题作为一道最复杂的线下题，最初想法也是在笔者的手机备忘录里成型的：

> 校园拼图地图
> 不一定是整块拼图
> 
> 拼好后按文字阅读顺序提取
> 
> 把地图分割成很多小区域 每个小区域编号对应id
> 把招新海报共6-8个贴在校园的各处
> 对应海报在地图上的位置 按id拼接为flag
> 顺序可以作为不同二维码扫出来链接的后缀

将想法稍作整理传到出题组共享文档里，其他同学将这个想法优化成型，最终定下了一个非常完美的计划：定做 NFC 卡片（考虑到现在几乎所有手机都有 NFC 功能），GPS 定位**第二近**的 NFC 卡片，让选手在半小时内集齐（刷一遍）所有的卡片。真神了。

赛前那天晚九点，笔者一行人出去贴卡片，途中获得了一些碎碎念：教学中心、图书馆、物质塔三个卡片的中点在湖上；图书馆那张卡片贴的地方是一个巨长的单行道，阴完了；如果在宿舍楼片区，怎么着也扫不到贴在食堂的那张。

比赛开始那天中午，我们的活动恰好和新生定向越野撞了，因为是周末刚下完雨，所以那天中午笔者出去时，能看到很多人要么拿着个新生定向越野的单子，要么就拿着个手机疯狂转悠。也算是在另外一种方面让新生起到了熟悉校园的作用xd（真该买个自行车）

那几天有很多人在群里吐槽 NFC 卡是不是在天上，距离数字怎么着也不减少。**第二近**的创意真的真的神了，题干里也写 "Location Service Error" "Fallback Location Service Waring"，这样的暗示才是真正的暗示，要多加学习。

预期解可能是获取网站的 api，将校园中的所有位置扫一遍，通过每个位置的距离反推出六个 NFC 卡都在哪里；规划路线在半小时内（其实走路也很宽裕）扫完六个获取本题 flag。但这样可能会遇到 WGS84 和 GCJ02 坐标系不同的问题，但这就是选手（或者 AI）要解决的事情了。

事实上笔者预期这题会很难，但笔者依然低估了大家的耐心与热情；第一天结束后就有十多个（还是二十多个，反正很多）通过了。真的非常有意思的一道线下（防纯 Agent 一把梭）题，在 12:58:59 迎来了首杀。

相信彩虹。

# 关于 絶対的な虚実と心中 与 CHANGE TO OPENCODE NOW !!!

最初想法也是在笔者的手机备忘录里成型的：

> LLM Jailbreaking
> 使用学校的deepseek-pro/deepseek-chat

感谢出题组的其他成员，将这个想法实现为了一个极好的题目。

# 未能用到的想法

还有一些未能在本次出题中用到的想法（虽然可能再也没机会用到了）

> 对年份进行a1z26
> 某个形象的最初登场年份
> 
> 今年是2026年。对2001-2026共26年中的每一年，给出一个或多个在这一年具有代表性的人或物。注意：你给出的每一个人或物只能唯一对应精确的一年（例如初登场年份…）。你可以使用搜索功能，请给出精确出处。一定要确保正确性！如果你给出了一个不正确的对应，笔者将殴打笔者身边的小猫作为惩罚。
> 
> 考虑一个科技小卖部：柜台上摆若干个科技产品（手机、电脑等）需要选手提取推出的年份进行 A1Z26 得到一串英文。

好吧，事实上这可能并不是一个非常好的想法：太单薄了，虽然可能有更多挖掘的深度，但仅凭笔者浅薄的知识，肯定是想不到更优秀的题面的；同时与 CTF 的主题联系也不是很紧密，所以便放弃了这个想法。

# 题目难度（自评）

按提交通过人数排序；同一通过人数下按拿部分分的难易程度排序。

A	Beginner

J	Easy-
B	Easy
C	Easy-
H	Easy+
K	Easy
L	Easy+
R	Easy+

D	Medium-
G	Medium-
F	Medium
E	Medium
I	Medium
P	Medium+
U	Medium+
T	Medium+

O	Hard-
N	Hard-
M	Hard
Q	Hard
V	Hard+
S	Hard+

# 题目生成脚本

直接把题目灵感和预期做法喂给 AI 生成的，很好用就是了。

```python
import matplotlib
from matplotlib import pyplot as plt
import math

matplotlib.rcParams['pdf.fonttype'] = 3 # make the label unselectable

flag1 = "GKP{L0g_4SC1I_is_Aw3somE_MEOW}"

xs = []
ys = []
for ind, c in enumerate(flag1):
    xs.append(ind)
    ys.append(math.log(ord(c)))

fig, ax = plt.subplots(figsize=(5, 2))
ax.plot(xs, ys)
ax.set_xlabel("Index of Character")
ax.set_ylabel("Log(ASCII)")
ax.set_xticks([])

# 生成大量隐藏字符以防 Agent 一把梭，但完全没起到效果
# for _ in range(100):
#     ax.text(0, 4, "&" * 256, alpha=0, fontsize=0)

fig.savefig("flag1.png", bbox_inches="tight")
fig.savefig("flag1.pdf", bbox_inches="tight")
# fig.savefig("flag1.svg", bbox_inches="tight")
# fig.show()

def ascii_to_bits_position(ch: str):
    code = ord(ch)
    x = code & 0x0F
    y = (code >> 4) & 0x07
    return x, y

flag2 = 'GKP{I_L0ve_PassW@rD!_xG*?2+W!Q0B&bA$6^K|#C$Z9}'

points = [ascii_to_bits_position(_) for _ in flag2]
xs = [p[0] for p in points]
ys = [p[1] for p in points]

fig, ax = plt.subplots(figsize=(6, 3))
ax.scatter(xs, ys)
ax.set_xlabel('Lower Four Bits')
ax.set_ylabel('Higher Three Bits')
ax.set_xlim(-0.5, 15.5)
ax.set_ylim(1.5, 7.5)
ax.set_xticks(range(0, 16, 1))
ax.set_yticks(range(2, 8, 1))
ax.set_aspect(1)

for (x1, y1), (x2, y2) in zip(points[:-1], points[1:]):
    ax.annotate(
        "",
        xy=(x2, y2),
        xytext=(x1, y1),
        arrowprops=dict(arrowstyle="->", color="black"),
    )

# for _ in range(100):
#     ax.text(0, 4, "&" * 256, alpha=0, fontsize=0)

fig.savefig('flag2.png', bbox_inches='tight')
fig.savefig('flag2.pdf', bbox_inches='tight')
# fig.savefig('flag2.svg', bbox_inches='tight')
# fig.show()
```

写的比较冗长，随便看看就行。

```python
import argparse
import io
import json
import zipfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageStat

PIGPEN_PATHS = {
    "A": "M 20 4 L 20 20 L 4 20",
    "B": "M 4 4 L 4 20 L 20 20 L 20 4",
    "C": "M 4 4 L 4 20 L 20 20",
    "D": "M 4 4 L 20 4 L 20 20 L 4 20",
    "E": "M 4 4 L 20 4 L 20 20 L 4 20 Z",
    "F": "M 20 4 L 4 4 L 4 20 L 20 20",
    "G": "M 4 4 L 20 4 L 20 20",
    "H": "M 4 20 L 4 4 L 20 4 L 20 20",
    "I": "M 20 4 L 4 4 L 4 20",
    "S": "M 4 4 L 12 20 L 20 4",
    "T": "M 4 4 L 20 12 L 4 20",
    "U": "M 20 4 L 4 12 L 20 20",
    "V": "M 4 20 L 12 4 L 20 20",
}

PIGPEN_BASE = {
    **{ch: ch for ch in "ABCDEFGHI"},
    **dict(zip("JKLMNOPQR", "ABCDEFGHI")),
    **dict(zip("STUVWXYZ", "STUVSTUV")),
}

PIGPEN_SEGMENTS = {
    "A": [(20, 4), (20, 20), (4, 20)],
    "B": [(4, 4), (4, 20), (20, 20), (20, 4)],
    "C": [(4, 4), (4, 20), (20, 20)],
    "D": [(4, 4), (20, 4), (20, 20), (4, 20)],
    "E": [(4, 4), (20, 4), (20, 20), (4, 20), (4, 4)],
    "F": [(20, 4), (4, 4), (4, 20), (20, 20)],
    "G": [(4, 4), (20, 4), (20, 20)],
    "H": [(4, 20), (4, 4), (20, 4), (20, 20)],
    "I": [(20, 4), (4, 4), (4, 20)],
    "S": [(4, 4), (12, 20), (20, 4)],
    "T": [(4, 4), (20, 12), (4, 20)],
    "U": [(20, 4), (4, 12), (20, 20)],
    "V": [(4, 20), (12, 4), (20, 20)],
}


def flag2_to_bits(flag2: str) -> str:
    """
    flag2 按 ASCII 编码成 bit 串，PNG/JPG 类型按位承载这些 bit。
    """
    try:
        data = flag2.encode("ascii")
    except UnicodeEncodeError:
        raise ValueError("flag2 must be ASCII, because it is encoded as 8-bit ASCII.")

    return "".join(f"{b:08b}" for b in data)


def clamp(x, lo=0, hi=255):
    return max(lo, min(hi, int(x)))


def load_consolas(font_path=None, size=72):
    """
    优先加载 Consolas。
    如果系统里没有 Consolas，可以通过 --font 手动指定 consola.ttf。
    """
    if font_path:
        return ImageFont.truetype(font_path, size)

    candidates = [
        "C:/Windows/Fonts/consola.ttf",
        "C:/Windows/Fonts/consolab.ttf",
    ]

    for p in candidates:
        try:
            return ImageFont.truetype(p, size)
        except Exception:
            pass

    print("[!] Warning: Consolas or monospace TTF not found, using PIL default font.")
    return ImageFont.load_default()


def text_bbox(draw: ImageDraw.ImageDraw, text: str, font):
    return draw.textbbox((0, 0), text, font=font)


def draw_char_top_left_on_cover(
    cover_path: Path,
    ch: str,
    out_fmt: str,
    font_path=None,
    font_size=64,
    margin=32,
    delta=8,
):
    """
    对用户提供的 cover 图片，在左上角用小字号写入外层标记 PIGPEN。

    字符颜色基于左上角局部背景均值加/减固定 delta。
    这样不同 cover 上都是统一色差，而不是固定绝对颜色。
    """
    img = Image.open(cover_path).convert("RGB")
    draw = ImageDraw.Draw(img)

    if ch:
        font = load_consolas(font_path, font_size)

        bbox = text_bbox(draw, ch, font)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]

        w, h = img.size

        x = min(margin, max(0, w - tw))
        y = min(margin, max(0, h - th))

        sample_box = (
            max(0, x),
            max(0, y),
            min(w, x + tw + 4),
            min(h, y + th + 4),
        )

        region = img.crop(sample_box)
        mean_rgb = ImageStat.Stat(region).mean[:3]
        avg = sum(mean_rgb) / 3

        # 为保证“色差统一”，每个通道固定加/减 delta。
        if avg > 128:
            color = tuple(clamp(c - delta) for c in mean_rgb)
        else:
            color = tuple(clamp(c + delta) for c in mean_rgb)

        draw.text(
            (x - bbox[0], y - bbox[1]),
            ch,
            fill=color,
            font=font,
        )

    return save_image_to_bytes(img, out_fmt)


def make_synthetic_dark_image(
    ch: str,
    out_fmt: str,
    font_path=None,
    size=96,
    font_size=72,
):
    """
    生成自动 cover。

    背景：rgb(0, 0, 0)

    字符：rgb(1, 1, 1)

    """
    # 固定背景与前景以便后续通过亮度/对比度调整可见隐藏字符
    bg = (0, 0, 0)

    img = Image.new("RGB", (size, size), bg)

    if ch:
        draw_pigpen_char(img, ch, font_path=font_path, font_size=font_size)

    return save_image_to_bytes(img, out_fmt)


def draw_pigpen_char(img: Image.Image, ch: str, font_path=None, font_size=72):
    """Draw one inner flag character as a pigpen glyph; punctuation stays literal."""
    draw = ImageDraw.Draw(img)
    upper = ch.upper()
    base = PIGPEN_BASE.get(upper)
    margin = max(8, img.width // 12)
    if base in PIGPEN_SEGMENTS:
        points = PIGPEN_SEGMENTS[base]
        scale = min((img.width - 2 * margin) / 24, (img.height - 2 * margin) / 24)
        scaled = [(margin + x * scale, margin + y * scale) for x, y in points]
        draw.line(scaled, fill=(1, 1, 1), width=max(2, int(scale * 2)), joint="curve")
        if upper in "JKLMNOPQRWXYZ":
            cx = margin + 12 * scale
            cy = margin + 12 * scale
            radius = max(1, int(scale * 1.5))
            draw.ellipse(
                (cx - radius, cy - radius, cx + radius, cy + radius), fill=(1, 1, 1)
            )
        return

    # The challenge keeps braces and underscores as literal characters.
    font = load_consolas(font_path, font_size)
    bbox = text_bbox(draw, ch, font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = min(margin, max(0, img.width - tw))
    y = min(margin, max(0, img.height - th))
    draw.text((x - bbox[0], y - bbox[1]), ch, fill=(1, 1, 1), font=font)


def save_image_to_bytes(img: Image.Image, out_fmt: str) -> bytes:
    """
    保存为 PNG 或 JPG。
    """
    buf = io.BytesIO()

    if out_fmt == "png":
        img.save(
            buf,
            format="PNG",
        )
    elif out_fmt == "jpg":
        # JPEG 会损失低亮度细节，所以用高质量、无色度子采样。
        img.save(
            buf,
            format="JPEG",
            quality=100,
            subsampling=0,
            optimize=False,
        )
    else:
        raise ValueError(f"Unsupported image format: {out_fmt}")

    return buf.getvalue()


def make_zip_bytes(filename: str, data: bytes) -> bytes:
    """
    创建一个 zip，里面只有一个文件。
    """
    buf = io.BytesIO()

    with zipfile.ZipFile(buf, "w", compression=zipfile.ZIP_DEFLATED) as zf:
        zf.writestr(filename, data)

    return buf.getvalue()


def make_polyglot(image_bytes: bytes, zip_bytes: bytes) -> bytes:
    """
    稳定版 image + zip polyglot。

    文件结构：

        [正常图片数据][正常 ZIP 数据]

    作为图片打开时，图片查看器通常忽略尾部 ZIP 数据。
    作为 ZIP 打开时，解压器从尾部 EOCD 找 ZIP 结构。
    """
    return image_bytes + zip_bytes


def infer_output_name(out_path: str | None, first_ext: str) -> Path:
    if out_path:
        return Path(out_path)
    return Path(f"1.{first_ext}")


def main():
    parser = argparse.ArgumentParser(
        description="Generate nested image+zip polyglot CTF challenge."
    )

    parser.add_argument(
        "--flag1", required=True, help="flag1, one pigpen character per inner layer"
    )
    parser.add_argument("--flag2", required=True, help="flag2, encoded by image types")
    parser.add_argument(
        "--covers",
        nargs="*",
        default=[],
        help="cover1 cover2 ... coverm. Used only for the first m layers.",
    )
    parser.add_argument("--innertxt", required=True, help="inner text file path")
    parser.add_argument(
        "--out", default=None, help="output file path, default A1.png/jpg"
    )

    parser.add_argument(
        "--inner-extensions",
        action="store_true",
        help="include .png/.jpg extensions for inner files. Default: hidden extensions.",
    )
    parser.add_argument(
        "--manifest",
        default="manifest_for_author.json",
        help="author-only manifest output path",
    )

    args = parser.parse_args()

    flag1 = args.flag1
    flag2 = args.flag2
    flag2_bits = flag2_to_bits(flag2)

    if len(flag2_bits) < len(flag1) + 1:
        raise ValueError(
            "This challenge version needs one outer cover plus one inner image per flag1 character. "
            f"Got {len(flag2_bits)} image layers for {len(flag1)} flag1 characters."
        )

    n = len(flag2_bits)

    covers = [Path(p) for p in args.covers]
    for p in covers:
        if not p.exists():
            raise FileNotFoundError(p)

    innertxt_path = Path(args.innertxt)
    if not innertxt_path.exists():
        raise FileNotFoundError(innertxt_path)

    # jpg => 1, png => 0
    layer_exts = ["jpg" if bit == "1" else "png" for bit in flag2_bits]

    # 从最内层开始构造。
    payload = innertxt_path.read_bytes()
    payload_name = "flag.txt"

    manifest_layers = []

    for idx in range(n, 0, -1):
        layer_no = idx
        ext = layer_exts[layer_no - 1]

        # The first cover carries the literal outer marker. Inner images carry
        # one pigpen-encoded flag1 character each.
        if layer_no == 1:
            hidden_char = "PIGPEN"
        elif layer_no <= len(flag1) + 1:
            hidden_char = flag1[layer_no - 2]
        else:
            hidden_char = ""

        # 前 m 层使用用户提供的 covers。
        if layer_no <= len(covers):
            cover_path = covers[layer_no - 1]
            image_bytes = draw_char_top_left_on_cover(
                cover_path=cover_path,
                ch=hidden_char,
                out_fmt=ext,
            )
            cover_mode = "provided_cover"
            cover_used = str(cover_path)
        else:
            image_bytes = make_synthetic_dark_image(
                ch=hidden_char,
                out_fmt=ext,
            )
            cover_mode = "synthetic_dark_square"
            cover_used = None

        zip_bytes = make_zip_bytes(payload_name, payload)
        polyglot = make_polyglot(image_bytes, zip_bytes)

        payload = polyglot

        if args.inner_extensions:
            payload_name = f"{layer_no}.{ext}"
        else:
            payload_name = f"{layer_no}.zip"

        manifest_layers.append(
            {
                "layer": layer_no,
                "image_type": ext,
                "flag2_bit": flag2_bits[layer_no - 1],
                "hidden_flag1_char": hidden_char if hidden_char else None,
                "hidden_encoding": (
                    "literal_outer_marker"
                    if layer_no == 1
                    else "pigpen" if hidden_char else None
                ),
                "cover_mode": cover_mode,
                "cover_used": cover_used,
                "zip_contains": "flag.txt" if layer_no == n else f"{layer_no + 1}",
            }
        )

    out_path = infer_output_name(args.out, layer_exts[0])
    out_path.write_bytes(payload)

    manifest = {
        "flag1": flag1,
        "flag2": flag2,
        "flag2_bits": flag2_bits,
        "n": n,
        "output": str(out_path),
        "note": "Do not distribute this file to players.",
        "layers": list(reversed(manifest_layers)),
    }

    if args.manifest:
        Path(args.manifest).write_text(
            json.dumps(manifest, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )

    print("[+] Done")
    print(f"[+] output: {out_path}")
    print(f"[+] n: {n}")
    print(f"[+] len(flag1): {len(flag1)}")
    print(f"[+] len(flag2): {len(flag2)}")
    print(f"[+] len(flag2_bits): {len(flag2_bits)}")
    print(f"[+] first image type: {layer_exts[0]}")
    print(f"[+] covers used for first m layers: {len(covers)}")
    print(f"[+] inner filenames include extensions: {args.inner_extensions}")
    if args.manifest:
        print(f"[+] author manifest: {args.manifest}")


if __name__ == "__main__":
    main()
```