# Jerry-1031.github.io

Blog based on Hexo 8 and NexT.Gemini.

## Run locally

```bash
npm install
npm run server
```

Preview: `http://localhost:4000/`

## How to write

```bash
npm run new -- post "Title"
```

Or directly edit `source/_posts/`. 

Use `![example](/images/posts/title/example.png)` for images.

Posts will be on `source/_posts/Title.md`.

## Posts

Front Matter:
```
---
title: 标题
date: 1970-01-01 08:00:00
updated: 1970-01-01 08:00:00
categories:
  - 笔记
tags:
  - 随笔
mathjax: true
excerpt: 简介
---
<!-- more -->
```

## Config

- `_config.yml`: Title, author, link style, Hexo configs
- `_config.next.yml`: Menu, Avatar, Search, NexT theme configs
- `source/about/index.md`: About page
