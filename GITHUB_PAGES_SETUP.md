# GitHub Pages 部署设置

代码已成功推送到 GitHub。现在需要在 GitHub 上启用 GitHub Pages。

## 启用 GitHub Pages

1. **访问 GitHub 仓库**
   - 打开 https://github.com/bryaninjapan/myportfoliopage

2. **进入 Settings**
   - 点击仓库页面顶部的 "Settings" 标签

3. **找到 Pages 设置**
   - 在左侧菜单中找到并点击 "Pages"
   - 或者直接访问：https://github.com/bryaninjapan/myportfoliopage/settings/pages

4. **配置 Source**
   - 在 "Source" 部分，选择 **"GitHub Actions"**
   - 不要选择 "Deploy from a branch"

5. **保存设置**
   - 设置会自动保存

## 自动部署

一旦启用 GitHub Pages，GitHub Actions workflow 会自动运行：

1. **首次部署**
   - 当你推送到 `main` 分支时，workflow 会自动触发
   - 或者在 Actions 标签页手动运行 workflow

2. **查看部署状态**
   - 点击仓库顶部的 "Actions" 标签
   - 查看 "Deploy to GitHub Pages" workflow 的运行状态

3. **访问网站**
   - 部署成功后，网站将在以下地址可用：
   - **https://bryaninjapan.github.io/myportfoliopage**
   - 首次部署可能需要几分钟时间

## 验证部署

部署成功后，你可以：
- 访问 https://bryaninjapan.github.io/myportfoliopage
- 测试主题切换（深色/浅色）
- 测试语言切换（中文/English）
- 点击磁碟查看项目链接

## 后续更新

每次推送到 `main` 分支时，网站会自动重新部署。无需手动操作。

## 故障排除

### 如果网站无法访问：
1. 检查 Actions 标签页是否有错误
2. 确认 GitHub Pages 已启用（Settings > Pages）
3. 确认 workflow 文件 `.github/workflows/deploy-github-pages.yml` 存在
4. 等待几分钟后重试（首次部署需要时间）

### 如果资源路径错误：
- 确认 `next.config.ts` 中的 `basePath` 设置为 `/myportfoliopage`
- 确认 workflow 中设置了 `GITHUB_PAGES=true` 环境变量

### 查看部署日志：
- 访问 Actions 标签页
- 点击最新的 workflow run
- 查看构建和部署步骤的详细日志

