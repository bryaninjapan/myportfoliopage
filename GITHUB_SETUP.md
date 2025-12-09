# GitHub 上传指南

## 快速步骤

### 1. 在 GitHub 上创建新仓库

访问 https://github.com/new 并创建新仓库。

### 2. 推送代码到 GitHub

创建仓库后，运行以下命令（替换 `YOUR_USERNAME` 和 `YOUR_REPO_NAME`）：

#### 使用 HTTPS（推荐首次使用）：
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

#### 使用 SSH（如果已配置 SSH 密钥）：
```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 3. 验证

推送成功后，访问 `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME` 查看你的代码。

## 当前状态

✅ 所有文件已添加到 Git
✅ 所有更改已提交
✅ 准备推送到 GitHub

## 注意事项

- 如果 GitHub 要求身份验证，你可能需要：
  - 使用 Personal Access Token（HTTPS）
  - 或配置 SSH 密钥（SSH）
- 首次推送可能需要输入 GitHub 用户名和密码/令牌

