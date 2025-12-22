# 如何添加/删除项目

## 添加新项目

编辑 `lib/projects.ts` 文件，在 `projects` 数组中添加新项目：

```typescript
{
  id: "project-id",           // 唯一标识符（小写，用连字符分隔）
  name: {
    zh: "项目中文名",          // 中文名称
    en: "Project English Name" // 英文名称
  },
  link: "https://project-url.com",  // 项目链接
  category: "tools",          // 可选：分类（"tools" 或 "archive"）
  year: 2024                  // 可选：年份
}
```

### 示例

```typescript
export const projects: Project[] = [
  // ... 现有项目
  {
    id: "my-new-project",
    name: {
      zh: "我的新项目",
      en: "My New Project"
    },
    link: "https://example.com",
    category: "tools",
    year: 2024
  }
];
```

## 删除项目

在 `lib/projects.ts` 文件中找到要删除的项目，删除整个对象即可。

## 注意事项

1. **项目ID**：确保每个项目的 `id` 是唯一的
2. **中英文名称**：必须提供中英文两种名称，用于语言切换
3. **链接**：确保链接有效，点击磁碟会打开该链接
4. **分类**：可选，用于筛选功能（目前支持 "tools" 和 "archive"）
5. **年份**：可选，显示在磁碟标签底部

## 布局说明

- **1-4个项目**：自动居中显示，2x2布局（4个项目时）
- **5-30个项目**：自动网格布局，根据屏幕宽度调整列数
- **响应式**：移动端自动调整为单列或双列显示

添加或删除项目后，页面会自动更新显示。

