
import {
  Bell,
  ChevronDown,
  ListTodo,
} from "lucide-react";

function Header() {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-icon">
          <ListTodo size={21} />
        </div>

        <span>TodoFlow</span>
      </div>

      <div className="topbar-right">
        <button className="header-icon">
          <Bell size={18} />
          <span className="notification-dot"></span>
        </button>

        <div className="user-profile">
          <div className="user-avatar">AR</div>

          <div className="user-info">
            <strong>Amin Rasooli</strong>
            <span>Personal Workspace</span>
          </div>

          <ChevronDown size={15} />
        </div>
      </div>
    </header>
  );
}

export default Header;

