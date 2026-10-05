
import { useState } from "react";
import {
  CalendarDays,
  Tag,
  X,
} from "lucide-react";

function AddTaskModal({ onClose, onAddTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Development");
  const [priority, setPriority] = useState("Low");
  const [date, setDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      category,
      priority,
      date: date || "No date",
      completed: false,
    };

    onAddTask(newTask);
  }

  return (
    <div className="modal-overlay">
      <div className="task-modal">
        <div className="modal-header">
          <div>
            <h2>Add New Task</h2>
            <p>Create a new task and stay organized.</p>
          </div>

          <button
            type="button"
            className="modal-close"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-form">
            <div className="form-group">
              <label>Task Title</label>

              <input
                type="text"
                placeholder="What do you need to do?"
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value)
                }
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Category</label>

                <div className="input-with-icon">
                  <Tag size={15} />

                  <select
                    value={category}
                    onChange={(event) =>
                      setCategory(event.target.value)
                    }
                  >
                    <option value="Development">
                      Development
                    </option>
                    <option value="Study">
                      Study
                    </option>
                    <option value="Personal">
                      Personal
                    </option>
                    <option value="Work">
                      Work
                    </option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Priority</label>

                <select
                  value={priority}
                  onChange={(event) =>
                    setPriority(event.target.value)
                  }
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Due Date</label>

              <div className="input-with-icon">
                <CalendarDays size={15} />

                <input
                  type="date"
                  value={date}
                  onChange={(event) =>
                    setDate(event.target.value)
                  }
                />
              </div>
            </div>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="cancel-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="submit-task-button"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskModal;

