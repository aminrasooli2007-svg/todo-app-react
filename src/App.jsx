
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import ProgressCard from "./components/ProgressCard";
import TasksSection from "./components/TasksSection";
import AddTaskModal from "./components/AddTaskModal";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import ClearCompletedModal from "./components/ClearCompletedModal";
import Toast from "./components/Toast";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [showClearModal, setShowClearModal] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
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

  const totalCount = tasks.length;

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const activeCount = totalCount - completedCount;

  const dueTodayCount = tasks.filter(
    (task) => task.date === "Today"
  ).length;

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

  function handleRequestClearCompleted() {
    if (completedCount === 0) {
      return;
    }

    setShowClearModal(true);
  }

  function handleCancelClearCompleted() {
    setShowClearModal(false);
  }

  function handleConfirmClearCompleted() {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => !task.completed)
    );

    setShowClearModal(false);
    setNotification(
      "Completed tasks cleared successfully"
    );

    setTimeout(() => {
      setNotification("");
    }, 3000);
  }

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Hero onAddTask={handleOpenModal} />

        <Overview
          totalCount={totalCount}
          activeCount={activeCount}
          completedCount={completedCount}
          dueTodayCount={dueTodayCount}
        />

        <ProgressCard
          completedCount={completedCount}
          totalCount={totalCount}
        />

        <TasksSection
          tasks={tasks}
          activeTab={activeTab}
          onChangeTab={setActiveTab}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleRequestDelete}
          onClearCompleted={handleRequestClearCompleted}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          priorityFilter={priorityFilter}
          onPriorityChange={setPriorityFilter}
          categoryFilter={categoryFilter}
          onCategoryChange={setCategoryFilter}
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

      {showClearModal && (
        <ClearCompletedModal
          completedCount={completedCount}
          onCancel={handleCancelClearCompleted}
          onConfirm={handleConfirmClearCompleted}
        />
      )}

      {notification && (
        <Toast message={notification} />
      )}
    </div>
  );
}

export default App;
