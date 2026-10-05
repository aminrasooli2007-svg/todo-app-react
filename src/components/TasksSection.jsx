import {
  Settings,
} from "lucide-react";

import TaskToolbar from "./TaskToolbar";
import TaskTabs from "./TaskTabs";
import TaskList from "./TaskList";
import TaskFooter from "./TaskFooter";

function TasksSection({ tasks }) {
  return (
    <section className="tasks-section">
      <div className="section-header">
        <div>
          <h2>My Tasks</h2>
          <p>Manage your tasks and stay productive.</p>
        </div>

        <button className="settings-button">
          <Settings size={17} />
        </button>
      </div>

      <TaskToolbar />

      <TaskTabs />

      <TaskList tasks={tasks} />

      <TaskFooter />
    </section>
  );
}

export default TasksSection;