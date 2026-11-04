---
title: AI绘图配置指北
date: 2026-11-04
updated: 2026-11-04
categories:
  - 折腾
tags:
  - 绘图
---
时间过得真快。我对AI绘图的记忆好像还停留在三年前 Stable Diffusion 的 Tag List 式画画，没想到三年过去了开源的绘图模型也这么高级了。下面给出一点我配置 ComfyUI + Qwen Image 2.1 的教程。

<!-- more -->

# 本地环境

- OS: Windows 10
- GPU: Nvidia RTX 4070 Laptop

# 更新显卡驱动

因为 ComfyUI 要求使用比较新的驱动，所以好多年没更新驱动的电脑可能要更新一下驱动。

别用 Nvidia APP 更新，直接到[官网](https://www.nvidia.cn/drivers/)上选好版本下载驱动就可以。因为笔者对打游戏的需求并不高，更在意稳定性，所以用的是 NVIDIA Studio 驱动。

# 下载ComfyUI

在 [官网](https://comfy.org/download) 下载安装 ComfyUI Desktop。懒得配置了所以直接下 Desktop 版本。空间比较大，选择安装在 D 盘。

# 选择绘图模型

安装好 ComfyUI Desktop 后配置模型。笔者采用 Qwen Image 2.1 作为绘图模型。直接在应用内下载太慢，使用 HF Mirror镜像。

注意下面的模型巨大，所以强烈建议安装在 D 盘。

下载 [Comfy-Org/Qwen-Image-2.1 · Hugging Face](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)：
```powershell
$env:HF_ENDPOINT = "https://hf-mirror.com"
cd .\ComfyUI-Shared\
hf download hf://Comfy-Org/Qwen-Image-2.1/vae/qwen_image_2.1_vae_bf16.safetensors --local-dir models
hf download hf://Comfy-Org/Qwen-Image-2.1/diffusion_models/qwen_image_2.1_int8_convrot.safetensors --local-dir models
```

如果不想使用下面的 Lora 的话需要下载：
```powershell
hf download hf://Comfy-Org/Qwen-Image-2.1/text_encoders/qwen3vl_8b_bf16.safetensors --local-dir models
```

下载 Anime 专用 Lora [MicksHF/Qwen-Image-2.1-Anime-Fusal](https://huggingface.co/MicksHF/Qwen-Image-2.1-Anime-Fusal)：
```powershell
hf download hf://MicksHF/Qwen-Image-2.1-Anime-Fusal/loras/fusal-qwen-image-2.1-v2-exact-r80.safetensors --local-dir models
hf download hf://MicksHF/Qwen-Image-2.1-Anime-Fusal/text_encoders/qwen3-vl-8b-heretic-1.3.0_bf16.safetensors --local-dir models
```

下载完成后可以删除本地的缓存。

同时，不想使用 Qwen 绘图模型的话也可以看看 [OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) 的相关配置教程。

# 配置ComfyUI工作流

打开 ComfyUI Desktop，下载一个稳定版（如 v0.42.1），打开后选择模板 Qwen Image 2.1：文生图。

打开后会报错找不到一些模型，刷新一下即可；因为没有 Prompt Enhance 需求所以上面没有下载PE 模型，进入子图后删除相关的 Prompt Enhance 部分即可。

进入子图，添加一个 `LoRA加载器（仅模型）` 节点，输入连 `UNet加载器` 节点输出，输出连 `Qwen Image 2.1 缓存` 节点输入。LoRA名称和强度接到最左边子图输入项。

退出子图，选择模型。配置如下所示：

- `unet_name`: `qwen_image_2.1_int8_convrot.safetensors`
- `clip_name`: `qwen3-vl-8b-heretic-1.3.0_bf16.safetensors`
- `vae_name`: `qwen_image_2.1_vae_bf16.safetensors`
- `lora_name`: `fusal-qwen-image-2.1-v2-exact-r80.safetensors`
- `strength_model`: `0.7`

然后就可以愉快的画画了！

> （2026/11/4）事实上，这个 LoRA V2 目前的效果并不好，所以暂时先把 `strength_model` 改为 `0`，先用最原始的 Qwen Image 2.1 绘图。NSFW 内容因为使用了 LoRA 自带的 `heretic` text encoders 所以可以正常绘画。等作者更新 V3 再说。
> 
> 事实上就是因为 V1（点进去LoRA链接的预览）的效果太好了我才用的，早知道不用这个了。
> 
> 详细内容见 [MicksHF/Qwen-Image-2.1-Anime-Fusal · Image Prompts Request](https://huggingface.co/MicksHF/Qwen-Image-2.1-Anime-Fusal/discussions/2)。Prompt 格式样例等也可以看这个链接。

# 在线使用

注册 Hugging Face 账号后有 5 分钟免费的 GPU 使用时长，可以用来在 Space 中小规模在线体验。注意可能有 NSFW 内容审核。
- [Qwen Image 2.1 FUSAL Anime Playground](https://huggingface.co/spaces/MicksHF/Qwen-Image-2.1-Anime-Fusal-Playground)
- [MOSS-Image Workflow](https://huggingface.co/spaces/OpenMOSS-Team/MOSS-Image)
