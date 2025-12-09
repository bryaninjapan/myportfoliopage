#!/bin/bash

# 脚本：将代码推送到 GitHub
# 使用方法：在创建 GitHub 仓库后，运行此脚本并替换 YOUR_USERNAME 和 YOUR_REPO_NAME

echo "请先确保已在 GitHub 上创建了仓库"
echo "然后运行以下命令（替换 YOUR_USERNAME 和 YOUR_REPO_NAME）："
echo ""
echo "git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
echo "git branch -M main"
echo "git push -u origin main"
echo ""
echo "或者使用 SSH（如果已配置）："
echo "git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git"
echo "git branch -M main"
echo "git push -u origin main"

