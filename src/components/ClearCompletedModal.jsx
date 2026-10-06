import {
  AlertTriangle,
  Trash2,
  X,
} from "lucide-react";

function ClearCompletedModal({
  onCancel,
  onConfirm,
  completedCount,
}) {
  return (
    <div className="modal-overlay">
      <div className="delete-modal">
        <div className="delete-modal-icon">
          <AlertTriangle size={22} />
        </div>

        <button
          type="button"
          className="delete-modal-close"
          onClick={onCancel}
        >
          <X size={18} />
        </button>

        <div className="delete-modal-content">
          <h2>Clear Completed Tasks?</h2>

          <p>
            Are you sure you want to remove all
            <strong> {completedCount} completed tasks</strong>?
          </p>

          <span>
            This action cannot be undone.
          </span>
        </div>

        <div className="delete-modal-actions">
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className="delete-confirm-button"
            onClick={onConfirm}
          >
            <Trash2 size={15} />
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClearCompletedModal;