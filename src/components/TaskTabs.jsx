function TaskTabs() {
  return (
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
  );
}

export default TaskTabs;