import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}

export default TaskList;