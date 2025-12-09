# 部署指南

本项目提供了两种 GitHub Actions 部署方案：

## 方案 1: 部署到 Vercel（推荐）⭐

Vercel 是 Next.js 的官方推荐平台，提供最佳性能和体验。

### 设置步骤：

1. **在 Vercel 创建项目**
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录
   - 点击 "Add New Project"
   - 导入你的 GitHub 仓库 `bryaninjapan/myportfoliopage`

2. **获取 Vercel 凭证**
   - 在 Vercel Dashboard，进入项目设置
   - 在 Settings > General 中找到：
     - **Project ID**
     - **Org ID** (在团队设置中)
   - 访问 https://vercel.com/account/tokens 创建 **Personal Access Token**

3. **配置 GitHub Secrets**
   - 在 GitHub 仓库页面，进入 Settings > Secrets and variables > Actions
   - 添加以下三个 Secrets：
     - `VERCEL_TOKEN`: 你的 Vercel Personal Access Token
     - `VERCEL_ORG_ID`: 你的 Vercel Organization ID
     - `VERCEL_PROJECT_ID`: 你的 Vercel Project ID

4. **启用 Workflow**
   - 使用 `deploy-vercel-simple.yml` workflow
   - 每次推送到 `main` 分支时自动部署

### 优势：
- ✅ 零配置，开箱即用
- ✅ 自动 HTTPS 和 CDN
- ✅ 预览部署（每个 PR 都有预览链接）
- ✅ 最佳性能优化
- ✅ 免费套餐足够使用

---

## 方案 2: 部署到 GitHub Pages

GitHub Pages 是免费的静态网站托管服务。

### 设置步骤：

1. **配置 Next.js 静态导出**（需要修改配置）
   - 由于使用 App Router，需要额外配置
   - 可能需要将项目改为静态生成模式

2. **启用 GitHub Pages**
   - 在 GitHub 仓库 Settings > Pages
   - Source 选择 "GitHub Actions"

3. **Workflow 会自动运行**
   - 使用 `deploy-github-pages.yml` workflow
   - 部署地址：`https://bryaninjapan.github.io/myportfoliopage`

### 注意事项：
- ⚠️ Next.js App Router 的某些功能在静态导出时可能受限
- ⚠️ 需要配置 `basePath` 和 `output: 'export'`
- ⚠️ API Routes 和 Server Components 功能受限

---

## 推荐方案

**强烈推荐使用 Vercel**，因为：
1. Next.js 官方支持，零配置
2. 更好的性能和功能支持
3. 自动预览部署
4. 完全免费（个人项目）

---

## 手动部署（不使用 GitHub Actions）

如果你想手动部署：

### Vercel CLI：
```bash
npm i -g vercel
vercel
```

### 或者直接在 Vercel Dashboard：
1. 连接 GitHub 仓库
2. 自动检测 Next.js 项目
3. 一键部署

---

## 故障排除

### Vercel 部署失败：
- 检查 Secrets 是否正确配置
- 确认 VERCEL_TOKEN 有足够权限
- 查看 GitHub Actions 日志获取详细错误信息

### GitHub Pages 部署失败：
- 确认已启用 GitHub Pages
- 检查 Next.js 配置是否支持静态导出
- 查看 Actions 标签页的详细日志

