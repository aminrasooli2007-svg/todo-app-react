import {
  CalendarDays,
  Check,
  Circle,
  MoreHorizontal,
  Tag,
  Trash2,
} from "lucide-react";

function TaskCard({ task }) {
  return (
    <div
      className={`task-card ${
        task.completed ? "completed" : ""
      }`}
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
  );
}

export default TaskCard;