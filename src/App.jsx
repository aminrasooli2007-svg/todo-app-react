import {
  Bell,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Circle,
  Clock3,
  Filter,
  ListTodo,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Sparkles,
  Tag,
  Trash2,
  X,
} from "lucide-react";

function App() {
  const tasks = [
    {
      id: 1,
      title: "Finish React Todo App",
      category: "Development",
      priority: "High",
      date: "Today",
      completed: false,
    },
    {
      id: 2,
      title: "Study JavaScript scenarios",
      category: "Study",
      priority: "Medium",
      date: "Today",
      completed: false,
    },
    {
      id: 3,
      title: "Upload project to GitHub",
      category: "Development",
      priority: "Low",
      date: "Tomorrow",
      completed: true,
    },
    {
      id: 4,
      title: "Practice English speaking",
      category: "Personal",
      priority: "Medium",
      date: "Tomorrow",
      completed: false,
    },
    {
      id: 5,
      title: "Review database notes",
      category: "Study",
      priority: "Low",
      date: "Oct 8",
      completed: true,
    },
  ];

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">
            <ListTodo size={21} />
          </div>

          <span>TodoFlow</span>
        </div>

        <div className="topbar-right">
          <button className="header-icon">
            <Bell size={18} />
            <span className="notification-dot"></span>
          </button>

          <div className="user-profile">
            <div className="user-avatar">AR</div>

            <div className="user-info">
              <strong>Amin Rasooli</strong>
              <span>Personal Workspace</span>
            </div>

            <ChevronDown size={15} />
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="hero">
          <div>
            <div className="hero-label">
              <Sparkles size={14} />
              <span>Stay focused</span>
            </div>

            <h1>Good morning, Amin 👋</h1>

            <p>
              Organize your day and get things done.
            </p>
          </div>

          <button className="add-task-button">
            <Plus size={18} />
            Add Task
          </button>
        </section>

        <section className="overview">
          <div className="overview-card">
            <div className="overview-icon purple">
              <ListTodo size={19} />
            </div>

            <div>
              <span>Total Tasks</span>
              <strong>12</strong>
            </div>
          </div>

          <div className="overview-card">
            <div className="overview-icon blue">
              <Clock3 size={19} />
            </div>

            <div>
              <span>In Progress</span>
              <strong>7</strong>
            </div>
          </div>

          <div className="overview-card">
            <div className="overview-icon green">
              <CheckCircle2 size={19} />
            </div>

            <div>
              <span>Completed</span>
              <strong>5</strong>
            </div>
          </div>

          <div className="overview-card">
            <div className="overview-icon orange">
              <CalendarDays size={19} />
            </div>

            <div>
              <span>Due Today</span>
              <strong>3</strong>
            </div>
          </div>
        </section>

        <section className="progress-card">
          <div className="progress-info">
            <div>
              <span>Daily progress</span>
              <strong>42%</strong>
            </div>

            <p>5 of 12 tasks completed</p>
          </div>

          <div className="progress-bar">
            <div className="progress-value"></div>
          </div>
        </section>

        <section className="tasks-section">
          <div className="section-header">
            <div>
              <h2>My Tasks</h2>
              <p>Manage your tasks and stay productive.</p>
            </div>

            <button className="settings-button">
              <Settings size={17} />
            </button>
          </div>

          <div className="task-toolbar">
            <div className="search-box">
              <Search size={17} />

              <input
                type="text"
                placeholder="Search tasks..."
              />

              <span className="shortcut">⌘ K</span>
            </div>

            <div className="toolbar-actions">
              <button className="filter-button">
                <Filter size={16} />
                Filter
              </button>

              <button className="filter-button">
                <Tag size={16} />
                Category
                <ChevronDown size={14} />
              </button>
            </div>
          </div>

          <div className="task-tabs">
            <button className="task-tab active">
              All <span>12</span>
            </button>

            <button className="task-tab">
              Active <span>7</span>
            </button>

            <button className="task-tab">
              Completed <span>5</span>
            </button>
          </div>

          <div className="task-list">
            {tasks.map((task) => (
              <div
                className={`task-card ${
                  task.completed ? "completed" : ""
                }`}
                key={task.id}
              >
                <button className="task-check">
                  {task.completed ? (
                    <span className="checked">
                      <Check size={14} />
                    </span>
                  ) : (
                    <Circle size={20} />
                  )}
                </button>

                <div className="task-main">
                  <div className="task-title-row">
                    <h3>{task.title}</h3>

                    <span
                      className={`priority ${task.priority.toLowerCase()}`}
                    >
                      {task.priority}
                    </span>
                  </div>

                  <div className="task-meta">
                    <span className="category">
                      <Tag size={13} />
                      {task.category}
                    </span>

                    <span className="task-date">
                      <CalendarDays size={13} />
                      {task.date}
                    </span>
                  </div>
                </div>

                <div className="task-actions">
                  <button className="task-action">
                    <MoreHorizontal size={18} />
                  </button>

                  <button className="task-action delete">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="task-footer">
            <span>
              Showing <strong>5</strong> of <strong>12</strong> tasks
            </span>

            <button className="clear-button">
              <X size={14} />
              Clear completed
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;