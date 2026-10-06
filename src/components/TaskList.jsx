
import TaskCard from "./TaskCard";

function TaskList({ tasks, onToggleTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
