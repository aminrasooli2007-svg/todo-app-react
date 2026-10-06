import {
  CheckCircle2,
  X,
} from "lucide-react";

function Toast({
  message,
  onClose,
}) {
  return (
    <div className="toast">
      <div className="toast-icon">
        <CheckCircle2 size={18} />
      </div>

      <div className="toast-content">
        <strong>Success</strong>
        <span>{message}</span>
      </div>

      <button
        type="button"
        className="toast-close"
        onClick={onClose}
      >
        <X size={15} />
      </button>
    </div>
  );
}

export default Toast;