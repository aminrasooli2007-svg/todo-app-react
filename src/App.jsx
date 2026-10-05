import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import ProgressCard from "./components/ProgressCard";
import TasksSection from "./components/TasksSection";

function App() {
  const tasks = [
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

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Hero />

        <Overview />

        <ProgressCard />

        <TasksSection tasks={tasks} />
      </main>
    </div>
  );
}

export default App;

