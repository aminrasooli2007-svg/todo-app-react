
import {
  Bell,
  ChevronDown,
  ListTodo,
  Check,
  Trash2,
} from "lucide-react";

function Header({
  notifications,
  onMarkNotificationsRead,
  onDeleteAllNotifications,
}) {
  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-icon">
          <ListTodo size={21} />
        </div>

        <span>TodoFlow</span>
      </div>

      <div className="topbar-right">
        <div className="notification-wrapper">
          <button
            type="button"
            className={`header-icon ${
              unreadCount > 0 ? "has-notifications" : ""
            }`}
            aria-label="Notifications"
          >
            <Bell size={18} />

            {unreadCount > 0 && (
              <span className="notification-count">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </button>

          <div className="notification-panel">
            <div className="notification-header">
              <div>
                <strong>Notifications</strong>
                <span>
                  {unreadCount} unread
                </span>
              </div>

              {notifications.length > 0 && (
                <div className="notification-actions">
                  {unreadCount > 0 && (
                    <button
                      type="button"
                      onClick={onMarkNotificationsRead}
                    >
                      <Check size={13} />
                      Mark read
                    </button>
                  )}

                  <button
                    type="button"
                    className="delete-all-notifications"
                    onClick={onDeleteAllNotifications}
                  >
                    <Trash2 size={13} />
                    Delete all
                  </button>
                </div>
              )}
            </div>

            <div className="notification-list">
              {notifications.length === 0 ? (
                <div className="notification-empty">
                  <Bell size={20} />
                  <span>No notifications yet</span>
                </div>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`notification-item ${
                      notification.read ? "read" : ""
                    }`}
                  >
                    <div className="notification-dot-icon">
                      <Check size={13} />
                    </div>

                    <div>
                      <strong>
                        {notification.title}
                      </strong>

                      <span>
                        {notification.message}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

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
