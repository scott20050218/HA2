# Todo-app

## 简介

一个使用原生 HTML、CSS、JavaScript 的简易待办事项（Todo）应用。无需构建工具，直接打开 `index.html` 即可运行。应用会将数据保存在浏览器的 `localStorage` 中。

## 功能特性

- 添加待办：输入内容后点击“添加 +”或回车创建任务。
- 完成/取消：点击列表项右侧“完成/取消”切换状态。
- 删除待办：点击“删除”移除任务。
- 本地持久化：所有操作即时同步到 `localStorage`，刷新不丢失。
- 过滤视图：在“全部 / 未完成 / 已完成”之间切换显示。
- 任务计数：右上角显示“共 N 项任务”。
- 空状态提示：当没有任务时显示引导文案。
- 批量操作：支持“清除已完成”和“清空所有”。

## 技术栈

- HTML5：语义化结构（`<main>`、`<section>`、`<button>` 等）。
- CSS3：现代布局（Flex）、组件化样式、状态与交互样式（tabs、按钮、空状态）。
- 原生 JavaScript（ES6+）：模块化逻辑、事件委托、模板字符串渲染。
- Web Storage API：`localStorage` 持久化任务数据。
- 可访问性（a11y）：`role="tab"`、`aria-selected`、隐藏 `label` 等。
- 零依赖 & 零构建：无需打包工具，直接打开 `index.html` 运行。

## 项目结构（当前实现）

```bash
./
  index.html        # 页面结构与挂载点
  /css
    style.css       # 布局、按钮、标签、列表、空状态等样式
  /js
    app.js          # 业务逻辑、渲染与 localStorage 同步
```

## 数据模型

```ts
type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
};
```

本地存储键：`todo-app.items`

## 使用说明

1. 打开项目根目录，直接双击 `index.html`，或使用任意静态服务器打开根目录。
2. 在输入框中输入任务内容并点击“添加 +”。
3. 使用顶部标签切换“全部 / 未完成 / 已完成”。
4. 通过列表项右侧按钮完成/取消或删除任务。
5. 使用底部按钮“清除已完成”或“清空所有”。

## 开发约定

- 语义化结构：`<main>`、`<section>`、`<button>` 等语义标签。
- 可访问性：表单控件有 `label`（隐藏可见），tab 按钮具备 `role="tab"` 和 `aria-selected`。
- 事件委托：列表使用事件委托处理完成/删除，减少监听器数量。
- 安全性：渲染文本前做 HTML 转义，避免 XSS 注入。

## 可能的扩展（未实现）

- 编辑任务标题（双击进入编辑、回车保存）。
- 导出/导入 JSON。
- 键盘快捷键（如 Delete 删除选中项）。
