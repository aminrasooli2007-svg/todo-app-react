
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import ProgressCard from "./components/ProgressCard";
import TasksSection from "./components/TasksSection";
import AddTaskModal from "./components/AddTaskModal";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import Toast from "./components/Toast";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [notification, setNotification] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish React Todo App",
      category: "Development",
      priority: "High",
      date: "Today",
      completed: false,
    },
    {
      id: 2,
      title: "Study JavaScript scenarios",
      category: "Study",
      priority: "Medium",
      date: "Today",
      completed: false,
    },
    {
      id: 3,
      title: "Upload project to GitHub",
      category: "Development",
      priority: "Low",
      date: "Tomorrow",
      completed: true,
    },
    {
      id: 4,
      title: "Practice English speaking",
      category: "Personal",
      priority: "Medium",
      date: "Tomorrow",
      completed: false,
    },
    {
      id: 5,
      title: "Review database notes",
      category: "Study",
      priority: "Low",
      date: "Oct 8",
      completed: true,
    },
  ]);

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleAddTask(newTask) {
    setTasks((currentTasks) => [
      ...currentTasks,
      newTask,
    ]);

    setShowModal(false);
  }

  function handleToggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  }

  function handleRequestDelete(taskId) {
    const selectedTask = tasks.find(
      (task) => task.id === taskId
    );

    setTaskToDelete(selectedTask);
  }

  function handleCancelDelete() {
    setTaskToDelete(null);
  }

  function handleConfirmDelete() {
    if (!taskToDelete) {
      return;
    }

    setTasks((currentTasks) =>
      currentTasks.filter(
        (task) => task.id !== taskToDelete.id
      )
    );

    setTaskToDelete(null);
    setNotification("Task deleted successfully");

    setTimeout(() => {
      setNotification("");
    }, 3000);
  }

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Hero onAddTask={handleOpenModal} />

        <Overview />

        <ProgressCard />

        <TasksSection
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleRequestDelete}
        />
      </main>

      {showModal && (
        <AddTaskModal
          onClose={handleCloseModal}
          onAddTask={handleAddTask}
        />
      )}

      {taskToDelete && (
        <DeleteConfirmModal
          task={taskToDelete}
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}

      {notification && (
        <Toast message={notification} />
      )}
    </div>
  );
}

export default App;
