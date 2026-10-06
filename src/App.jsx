
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import ProgressCard from "./components/ProgressCard";
import TasksSection from "./components/TasksSection";
import AddTaskModal from "./components/AddTaskModal";
import EditTaskModal from "./components/EditTaskModal";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import ClearCompletedModal from "./components/ClearCompletedModal";
import Toast from "./components/Toast";

const initialTasks = [
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
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [showClearModal, setShowClearModal] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [notification, setNotification] = useState("");

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("todoflow-theme") || "dark";
  });

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("todoflow-tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return initialTasks;
  });

  const [notifications, setNotifications] = useState(() => {
    const savedNotifications =
      localStorage.getItem("todoflow-notifications");

    if (savedNotifications) {
      return JSON.parse(savedNotifications);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      "todoflow-tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem(
      "todoflow-theme",
      theme
    );

    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(
      "todoflow-notifications",
      JSON.stringify(notifications)
    );
  }, [notifications]);

  const totalCount = tasks.length;

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const activeCount = totalCount - completedCount;

  const dueTodayCount = tasks.filter(
    (task) => task.date === "Today"
  ).length;

  function showNotification(message) {
    setNotification(message);

    setTimeout(() => {
      setNotification("");
    }, 3000);
  }

  function addActivity(title, message) {
    const newNotification = {
      id: Date.now(),
      title,
      message,
      read: false,
    };

    setNotifications((currentNotifications) => [
      newNotification,
      ...currentNotifications,
    ].slice(0, 8));
  }

  function handleAddTask(newTask) {
    setTasks((currentTasks) => [
      ...currentTasks,
      newTask,
    ]);

    setShowModal(false);

    showNotification("Task added successfully");

    addActivity(
      "New task added",
      `"${newTask.title}" was added.`
    );
  }

  function handleToggleTask(taskId) {
    const selectedTask = tasks.find(
      (task) => task.id === taskId
    );

    if (!selectedTask) {
      return;
    }

    const completed = !selectedTask.completed;

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed,
            }
          : task
      )
    );

    addActivity(
      completed
        ? "Task completed"
        : "Task reopened",
      `"${selectedTask.title}" ${
        completed ? "was completed." : "was reopened."
      }`
    );
  }

  function handleRequestEdit(taskId) {
    const selectedTask = tasks.find(
      (task) => task.id === taskId
    );

    setTaskToEdit(selectedTask);
  }

  function handleSaveTask(updatedTask) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    );

    setTaskToEdit(null);

    showNotification("Task updated successfully");

    addActivity(
      "Task updated",
      `"${updatedTask.title}" was updated.`
    );
  }

  function handleRequestDelete(taskId) {
    const selectedTask = tasks.find(
      (task) => task.id === taskId
    );

    setTaskToDelete(selectedTask);
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

    addActivity(
      "Task deleted",
      `"${taskToDelete.title}" was deleted.`
    );

    setTaskToDelete(null);

    showNotification("Task deleted successfully");
  }

  function handleRequestClearCompleted() {
    if (completedCount === 0) {
      return;
    }

    setShowClearModal(true);
  }

  function handleConfirmClearCompleted() {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => !task.completed)
    );

    setShowClearModal(false);

    addActivity(
      "Completed tasks cleared",
      `${completedCount} completed tasks were removed.`
    );

    showNotification(
      "Completed tasks cleared successfully"
    );
  }

  function handleMarkNotificationsRead() {
    setNotifications((currentNotifications) =>
      currentNotifications.map(
        (notification) => ({
          ...notification,
          read: true,
        })
      )
    );
  }

  function handleDeleteAllNotifications() {
    setNotifications([]);
  }

  return (
    <div className="app">
      <Header
        notifications={notifications}
        onMarkNotificationsRead={
          handleMarkNotificationsRead
        }
        onDeleteAllNotifications={
          handleDeleteAllNotifications
        }
      />

      <main className="main-content">
        <Hero
          onAddTask={() => setShowModal(true)}
        />

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
          onEditTask={handleRequestEdit}
          onClearCompleted={
            handleRequestClearCompleted
          }
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          priorityFilter={priorityFilter}
          onPriorityChange={setPriorityFilter}
          categoryFilter={categoryFilter}
          onCategoryChange={setCategoryFilter}
          theme={theme}
          onThemeChange={setTheme}
        />
      </main>

      {showModal && (
        <AddTaskModal
          onClose={() => setShowModal(false)}
          onAddTask={handleAddTask}
        />
      )}

      {taskToEdit && (
        <EditTaskModal
          task={taskToEdit}
          onClose={() => setTaskToEdit(null)}
          onSave={handleSaveTask}
        />
      )}

      {taskToDelete && (
        <DeleteConfirmModal
          task={taskToDelete}
          onCancel={() => setTaskToDelete(null)}
          onConfirm={handleConfirmDelete}
        />
      )}

      {showClearModal && (
        <ClearCompletedModal
          completedCount={completedCount}
          onCancel={() => setShowClearModal(false)}
          onConfirm={handleConfirmClearCompleted}
        />
      )}

      {notification && (
        <Toast
          message={notification}
          onClose={() => setNotification("")}
        />
      )}
    </div>
  );
}

export default App;
