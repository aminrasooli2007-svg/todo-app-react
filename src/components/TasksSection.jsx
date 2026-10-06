
import { useState } from "react";
import {
  Settings,
  Moon,
  Sun,
  Check,
} from "lucide-react";

import TaskToolbar from "./TaskToolbar";
import TaskTabs from "./TaskTabs";
import TaskList from "./TaskList";
import TaskFooter from "./TaskFooter";

function TasksSection({
  tasks,
  activeTab,
  onChangeTab,
  onToggleTask,
  onDeleteTask,
  onEditTask,
  onClearCompleted,
  searchTerm,
  onSearchChange,
  priorityFilter,
  onPriorityChange,
  categoryFilter,
  onCategoryChange,
  theme,
  onThemeChange,
}) {
  const [showSettings, setShowSettings] = useState(false);

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const activeCount = tasks.length - completedCount;

  const filteredTasks = tasks.filter((task) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "active" && !task.completed) ||
      (activeTab === "completed" && task.completed);

    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesPriority =
      priorityFilter === "All" ||
      task.priority === priorityFilter;

    const matchesCategory =
      categoryFilter === "All" ||
      task.category === categoryFilter;

    return (
      matchesTab &&
      matchesSearch &&
      matchesPriority &&
      matchesCategory
    );
  });

  return (
    <section className="tasks-section">
      <div className="section-header">
        <div>
          <h2>My Tasks</h2>
          <p>Manage your tasks and stay productive.</p>
        </div>

        <div className="settings-wrapper">
          <button
            type="button"
            className={`settings-button ${
              showSettings ? "active" : ""
            }`}
            onClick={() =>
              setShowSettings(!showSettings)
            }
            aria-label="Settings"
          >
            <Settings size={17} />
          </button>

          {showSettings && (
            <div className="settings-menu">
              <div className="settings-title">
                Appearance
              </div>

              <button
                type="button"
                className={
                  theme === "dark"
                    ? "theme-option active"
                    : "theme-option"
                }
                onClick={() => {
                  onThemeChange("dark");
                  setShowSettings(false);
                }}
              >
                <Moon size={16} />
                <span>Dark Mode</span>

                {theme === "dark" && (
                  <Check size={15} />
                )}
              </button>

              <button
                type="button"
                className={
                  theme === "light"
                    ? "theme-option active"
                    : "theme-option"
                }
                onClick={() => {
                  onThemeChange("light");
                  setShowSettings(false);
                }}
              >
                <Sun size={16} />
                <span>Light Mode</span>

                {theme === "light" && (
                  <Check size={15} />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      <TaskToolbar
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        priorityFilter={priorityFilter}
        onPriorityChange={onPriorityChange}
        categoryFilter={categoryFilter}
        onCategoryChange={onCategoryChange}
      />

      <TaskTabs
        activeTab={activeTab}
        onChangeTab={onChangeTab}
        totalCount={tasks.length}
        activeCount={activeCount}
        completedCount={completedCount}
      />

      <TaskList
        tasks={filteredTasks}
        onToggleTask={onToggleTask}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
      />

      <TaskFooter
        taskCount={filteredTasks.length}
        completedCount={completedCount}
        onClearCompleted={onClearCompleted}
      />
    </section>
  );
}

export default TasksSection;
