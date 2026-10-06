
import { useState } from "react";
import {
  ChevronDown,
  Filter,
  Search,
  Tag,
} from "lucide-react";

function TaskToolbar({
  searchTerm,
  onSearchChange,
  priorityFilter,
  onPriorityChange,
  categoryFilter,
  onCategoryChange,
}) {
  const [openMenu, setOpenMenu] = useState(null);

  function handleFilterClick() {
    setOpenMenu(
      openMenu === "priority" ? null : "priority"
    );
  }

  function handleCategoryClick() {
    setOpenMenu(
      openMenu === "category" ? null : "category"
    );
  }

  function handlePriorityChange(value) {
    onPriorityChange(value);
    setOpenMenu(null);
  }

  function handleCategoryChange(value) {
    onCategoryChange(value);
    setOpenMenu(null);
  }

  return (
    <div className="task-toolbar">
      <div className="search-box">
        <Search size={17} />

        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(event) =>
            onSearchChange(event.target.value)
          }
        />

        <span className="shortcut">⌘ K</span>
      </div>

      <div className="toolbar-actions">
        <div className="filter-wrapper">
          <button
            type="button"
            className="filter-button"
            onClick={handleFilterClick}
          >
            <Filter size={16} />
            Filter
            <ChevronDown
              className={
                openMenu === "priority"
                  ? "chevron-open"
                  : ""
              }
              size={14}
            />
          </button>

          {openMenu === "priority" && (
            <div className="filter-menu">
              {[
                ["All", "All priorities"],
                ["High", "High priority"],
                ["Medium", "Medium priority"],
                ["Low", "Low priority"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={
                    priorityFilter === value
                      ? "selected"
                      : ""
                  }
                  onClick={() =>
                    handlePriorityChange(value)
                  }
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="filter-wrapper">
          <button
            type="button"
            className="filter-button"
            onClick={handleCategoryClick}
          >
            <Tag size={16} />
            Category
            <ChevronDown
              className={
                openMenu === "category"
                  ? "chevron-open"
                  : ""
              }
              size={14}
            />
          </button>

          {openMenu === "category" && (
            <div className="filter-menu">
              {[
                ["All", "All categories"],
                ["Development", "Development"],
                ["Study", "Study"],
                ["Personal", "Personal"],
                ["Work", "Work"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={
                    categoryFilter === value
                      ? "selected"
                      : ""
                  }
                  onClick={() =>
                    handleCategoryChange(value)
                  }
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskToolbar;
