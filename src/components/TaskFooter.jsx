import { X } from "lucide-react";

function TaskFooter({
  taskCount,
  completedCount,
  onClearCompleted,
}) {
  return (
    <div className="task-footer">
      <span>
        Showing <strong>{taskCount}</strong> tasks
      </span>

      <button
        type="button"
        className="clear-button"
        disabled={completedCount === 0}
        onClick={onClearCompleted}
      >
        <X size={14} />
        Clear completed
      </button>
    </div>
  );
}

export default TaskFooter;