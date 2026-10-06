
import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
}) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
