# Jerry-1031.github.io

基于 Hexo 8 和 NexT.Gemini 的静态个人博客，通过 GitHub Actions 部署到 GitHub Pages。

## 本地运行

需要 Node.js 22 或更高版本。

```powershell
npm install
npm run server
```

打开 `http://localhost:4000/` 预览。

## 写文章

```powershell
npm run new -- post "文章标题"
```

文章会生成在 `source/_posts/`，使用 Markdown 编辑。提交并推送到 `main` 后，GitHub Actions 会自动构建和部署。

## 常用配置

- `_config.yml`：站点标题、作者、链接格式等 Hexo 配置。
- `_config.next.yml`：菜单、头像、搜索等 NexT 主题配置。
- `source/about/index.md`：关于页面。
- `source/0522/`：不经过 Hexo 渲染的独立前端页面，线上地址为 `/0522/`。

## 首次部署

进入仓库的 `Settings > Pages`，将 `Build and deployment > Source` 设置为 `GitHub Actions`。之后推送到 `main` 即可。
