
import {
  Plus,
  Sparkles,
} from "lucide-react";

function Hero({ onAddTask }) {
  return (
    <section className="hero">
      <div>
        <div className="hero-label">
          <Sparkles size={14} />
          <span>Stay focused</span>
        </div>

        <h1>Good morning, Amin 👋</h1>

        <p>
          Organize your day and get things done.
        </p>
      </div>

      <button
        type="button"
        className="add-task-button"
        onClick={onAddTask}
      >
        <Plus size={18} />
        Add Task
      </button>
    </section>
  );
}

export default Hero;

