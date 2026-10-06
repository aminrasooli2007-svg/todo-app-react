
import {
  Settings,
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
  onClearCompleted,
}) {
  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const activeCount = tasks.length - completedCount;

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "active") {
      return !task.completed;
    }

    if (activeTab === "completed") {
      return task.completed;
    }

    return true;
  });

  return (
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

      <TaskToolbar />

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
