import {
  ChevronDown,
  Filter,
  Search,
  Tag,
} from "lucide-react";

function TaskToolbar() {
  return (
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
  );
}

export default TaskToolbar;