// 获取 DOM 元素
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const taskCount = document.getElementById("task-count");
const emptyState = document.getElementById("empty-state");
const filterAllBtn = document.getElementById("filter-all");
const filterActiveBtn = document.getElementById("filter-active");
const filterCompletedBtn = document.getElementById("filter-completed");
const clearCompletedBtn = document.getElementById("clear-completed");
const clearAllBtn = document.getElementById("clear-all");

// 本地存储键
const STORAGE_KEY = "todo-app.items";

// 内存状态
let todos = [];
let currentFilter = "all"; // all | active | completed

// 工具：加载与保存
function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch (_) {
    return [];
  }
}

function saveTodos(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// 业务：增、改、删
function addTodo(title) {
  const item = {
    id: String(Date.now()) + Math.random().toString(16).slice(2),
    title,
    completed: false,
    createdAt: Date.now(),
  };
  todos.push(item);
  saveTodos(todos);
  render();
}

function toggleTodo(id) {
  todos = todos.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  saveTodos(todos);
  render();
}

function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  saveTodos(todos);
  render();
}

function clearCompleted() {
  todos = todos.filter((t) => !t.completed);
  saveTodos(todos);
  render();
}

function clearAll() {
  todos = [];
  saveTodos(todos);
  render();
}

// 渲染
function getFilteredTodos() {
  if (currentFilter === "active") return todos.filter((t) => !t.completed);
  if (currentFilter === "completed") return todos.filter((t) => t.completed);
  return todos;
}

function render() {
  const data = getFilteredTodos();
  if (data.length === 0) {
    todoList.innerHTML = "";
  } else {
    todoList.innerHTML = data
      .map((t) => {
        return `
        <li data-id="${t.id}" class="${t.completed ? "completed" : ""}">
          <span>${escapeHtml(t.title)}</span>
          <div class="todo-actions">
            <button type="button" class="todo-btn complete">${
              t.completed ? "取消" : "完成"
            }</button>
            <button type="button" class="todo-btn delete">删除</button>
          </div>
        </li>
      `;
      })
      .join("");
  }

  // 计数与空状态
  const total = todos.length;
  taskCount.textContent = `共 ${total} 项任务`;
  emptyState.style.display = total === 0 ? "block" : "none";

  // 激活标签状态
  [filterAllBtn, filterActiveBtn, filterCompletedBtn].forEach((btn) =>
    btn.classList.remove("is-active")
  );
  if (currentFilter === "all") filterAllBtn.classList.add("is-active");
  if (currentFilter === "active") filterActiveBtn.classList.add("is-active");
  if (currentFilter === "completed")
    filterCompletedBtn.classList.add("is-active");
}

// 转义以避免 XSS（尽管是本地应用，仍做防护）
function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// 事件绑定
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = todoInput.value.trim();
  if (value === "") return;
  addTodo(value);
  todoInput.value = "";
});

// 列表事件委托：完成/删除
todoList.addEventListener("click", function (e) {
  const target = e.target;
  if (!(target instanceof HTMLElement)) return;
  const li = target.closest("li");
  if (!li) return;
  const id = li.getAttribute("data-id");
  if (!id) return;
  if (target.classList.contains("complete")) {
    toggleTodo(id);
  } else if (target.classList.contains("delete")) {
    deleteTodo(id);
  }
});

// 过滤
filterAllBtn.addEventListener("click", () => {
  currentFilter = "all";
  render();
});
filterActiveBtn.addEventListener("click", () => {
  currentFilter = "active";
  render();
});
filterCompletedBtn.addEventListener("click", () => {
  currentFilter = "completed";
  render();
});

// 清理按钮
clearCompletedBtn.addEventListener("click", clearCompleted);
clearAllBtn.addEventListener("click", clearAll);

// 初始化
todos = loadTodos();
render();
