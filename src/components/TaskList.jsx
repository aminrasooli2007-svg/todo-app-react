
import {
  ClipboardList,
} from "lucide-react";

import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">
          <ClipboardList size={24} />
        </div>

        <h3>No tasks found</h3>

        <p>
          Try changing your search or filter settings.
        </p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
