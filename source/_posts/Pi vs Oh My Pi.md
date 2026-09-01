---
title: Pi vs Oh My Pi
date: 2026-09-01
categories:
  - 笔记
tags:
  - Agent
  - AI
  - 编程
excerpt: Pi 的一些推荐扩展调研，以及为什么我更喜欢 Oh My Pi
---

# 扩展对比表

| 扩展 | 原生 Pi 上的价值 | OMP 中的情况 | 建议 |
|---|---|---|---|
| `pi-web-access` | 搜索、网页抓取、GitHub、PDF、YouTube | OMP 已有 `web_search`、URL/PDF/GitHub 读取，并支持多 Provider | OMP 跳过 |
| `pi-session-recall` | 搜索旧会话，适合长期使用 | OMP 的 memory 更偏持久记忆，不完全等价于旧会话全文检索 | 真需要再用原生 Pi |
| `@ff-labs/pi-fff` | FFF 索引、模糊搜索、frecency | OMP 自带进程内 `find/grep/glob`，速度已经很强 | 大仓库再测试 |
| `pi-lens` | LSP、lint、formatter、类型诊断 | OMP 已内置 LSP 能力 | OMP 跳过 |
| `rpiv-ask-user-question` | 结构化询问用户 | OMP 已有内置 `ask` 工具 | 跳过 |
| `@eko24ive/pi-ask` | 同上 | OMP 已覆盖 | 跳过 |
| `@plannotator/pi-extension` | 可视化标注和审查计划 | OMP 有 plan/review，但不是完全相同的标注体验 | 只有确实需要可视化审查才装 |
| `earendil-works/pi-review` | Pi 的代码审查扩展 | OMP 已有 `/review`、P0-P3 优先级和 reviewer agents | OMP 跳过 |
| `pi-context-view` | 查看上下文消耗明细 | OMP 已有 `/context` 和 details | OMP 跳过 |
| `@sting8k/pi-vcc` | 无 LLM 的结构化压缩 | OMP 已集成 `snapcompact`，但算法不完全相同 | 追求确定性压缩时测试 |
| `@howaboua/pi-codex-conversion` | Codex 工具和 Prompt 适配 | OMP 已原生支持 OpenAI/Codex 方向 | OMP 跳过 |
| `@ahm3tj4f/pi-undo` | 非 Git 目录中的逐消息 undo/redo | OMP 有编辑预览、checkpoint 和 Git 能力，但未必完全等价 | 低优先级；谨慎测试 |
| `@narumitw/pi-btw` | 不污染主线程的侧边问题 | OMP 已有 `/btw` | OMP 已原生支持 |
| `pi-add-dir` | 把外部目录的规则和 skills 加入会话 | OMP 已支持多种上下文文件格式，但外部目录注入仍有独立价值 | 多仓库工作时再装 |
| `earendil-works/pi-transcribe` | 语音输入 | OMP 已有语音/STT 相关内建能力 | OMP 优先验证内建功能 |
| `pi-codex-image-gen` | ChatGPT Images 生成 | OMP 已有内建 `generate_image` | OMP 跳过 |
| `pi-goal` / `@narumitw/pi-goal` | 长目标、自动继续、明确 complete/block/wait | OMP 有 task/workflow 也有 `/goal` | OMP 已原生支持 |
| `pi-skillful` | skills 隐藏、按需展开、`$` 调用 | 原生 Pi 上很有用；OMP 已有 skills、内部 URL 和 workflow 能力 | 原生 Pi 的可选增强 |
| `@zigai/pi-mention-skill` | 用 `$` 替代 `/` 展开 Skill | 主要是交互习惯增强 | 低优先级 |
| `@tavily/pi-extension` | 直接使用 Tavily | `pi-web-access` 已经支持 Tavily 和多个搜索 Provider | 不要和 web-access 重复安装 |

# OMP 已经够好用了

如题。OMP 本身就是偷懒的选择，适合不喜欢自己配置，想开箱即用的用户。更何况 OMP 还能自动继承 Codex 的 skill 和 system prompt，所以笔者并不想把自己的 OMP 迁移到 Pi 上。