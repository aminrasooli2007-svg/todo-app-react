
function TaskTabs({
  activeTab,
  onChangeTab,
  totalCount,
  activeCount,
  completedCount,
}) {
  return (
    <div className="task-tabs">
      <button
        type="button"
        className={`task-tab ${
          activeTab === "all" ? "active" : ""
        }`}
        onClick={() => onChangeTab("all")}
      >
        All <span>{totalCount}</span>
      </button>

      <button
        type="button"
        className={`task-tab ${
          activeTab === "active" ? "active" : ""
        }`}
        onClick={() => onChangeTab("active")}
      >
        Active <span>{activeCount}</span>
      </button>

      <button
        type="button"
        className={`task-tab ${
          activeTab === "completed" ? "active" : ""
        }`}
        onClick={() => onChangeTab("completed")}
      >
        Completed <span>{completedCount}</span>
      </button>
    </div>
  );
}

export default TaskTabs;
