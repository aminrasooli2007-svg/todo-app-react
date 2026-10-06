
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import ProgressCard from "./components/ProgressCard";
import TasksSection from "./components/TasksSection";
import AddTaskModal from "./components/AddTaskModal";

function App() {
  const [showModal, setShowModal] = useState(false);

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
        />
      </main>

      {showModal && (
        <AddTaskModal
          onClose={handleCloseModal}
          onAddTask={handleAddTask}
        />
      )}
    </div>
  );
}

export default App;
