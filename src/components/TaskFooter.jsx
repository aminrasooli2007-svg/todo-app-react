import { X } from "lucide-react";

function TaskFooter() {
  return (
    <div className="task-footer">
      <span>
        Showing <strong>5</strong> of <strong>12</strong> tasks
      </span>

      <button className="clear-button">
        <X size={14} />
        Clear completed
      </button>
    </div>
  );
}

export default TaskFooter;