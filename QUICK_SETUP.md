# 🚀 快速部署设置指南

## 推荐：使用 Vercel 部署（5分钟设置）

### 步骤 1: 在 Vercel 创建项目

1. 访问 https://vercel.com
2. 点击 "Sign Up" 使用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择你的仓库：`bryaninjapan/myportfoliopage`
5. 点击 "Import"

Vercel 会自动检测 Next.js 项目，直接点击 "Deploy" 即可完成首次部署！

### 步骤 2: 获取 Vercel 凭证（用于 GitHub Actions）

#### 获取 Project ID 和 Org ID：
1. 在 Vercel Dashboard，进入你的项目
2. 点击 **Settings** > **General**
3. 找到 **Project ID**（复制它）
4. 在页面顶部可以看到 **Team/Org** 名称，点击进入
5. 在 Team Settings > General 中找到 **Team ID**（这就是 Org ID）

#### 创建 Personal Access Token：
1. 访问 https://vercel.com/account/tokens
2. 点击 "Create Token"
3. 输入名称（如：`github-actions`）
4. 选择过期时间（建议选择 "No Expiration"）
5. 点击 "Create Token"
6. **立即复制 Token**（只显示一次！）

### 步骤 3: 配置 GitHub Secrets

1. 访问你的 GitHub 仓库：https://github.com/bryaninjapan/myportfoliopage
2. 点击 **Settings** > **Secrets and variables** > **Actions**
3. 点击 **New repository secret**，添加以下三个：

   **Secret 1:**
   - Name: `VERCEL_TOKEN`
   - Value: 你刚才复制的 Personal Access Token

   **Secret 2:**
   - Name: `VERCEL_ORG_ID`
   - Value: 你的 Team/Org ID

   **Secret 3:**
   - Name: `VERCEL_PROJECT_ID`
   - Value: 你的 Project ID

### 步骤 4: 启用 GitHub Actions

1. 在 GitHub 仓库页面，点击 **Actions** 标签
2. 你应该能看到 "Deploy to Vercel" workflow
3. 如果显示需要启用，点击 "I understand my workflows, go ahead and enable them"

### 步骤 5: 测试部署

1. 对代码做一个小改动（比如修改 README.md）
2. 提交并推送：
   ```bash
   git add .
   git commit -m "Test deployment"
   git push
   ```
3. 在 GitHub Actions 页面查看部署进度
4. 部署成功后，访问 Vercel Dashboard 获取你的网站链接

---

## ✅ 完成！

现在每次你推送代码到 `main` 分支时，GitHub Actions 会自动：
1. 构建项目
2. 部署到 Vercel
3. 更新你的网站

---

## 📝 其他部署选项

如果你想使用 GitHub Pages 或其他平台，请查看 `DEPLOYMENT.md` 文件。

---

## 🆘 需要帮助？

- 查看 GitHub Actions 日志：仓库 > Actions 标签
- 查看 Vercel 部署日志：Vercel Dashboard > Deployments
- 参考完整文档：`DEPLOYMENT.md`

