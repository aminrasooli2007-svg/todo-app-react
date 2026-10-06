import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  ListTodo,
} from "lucide-react";

function Overview({
  totalCount,
  activeCount,
  completedCount,
  dueTodayCount,
}) {
  return (
    <section className="overview">
      <div className="overview-card">
        <div className="overview-icon purple">
          <ListTodo size={19} />
        </div>

        <div>
          <span>Total Tasks</span>
          <strong>{totalCount}</strong>
        </div>
      </div>

      <div className="overview-card">
        <div className="overview-icon blue">
          <Clock3 size={19} />
        </div>

        <div>
          <span>In Progress</span>
          <strong>{activeCount}</strong>
        </div>
      </div>

      <div className="overview-card">
        <div className="overview-icon green">
          <CheckCircle2 size={19} />
        </div>

        <div>
          <span>Completed</span>
          <strong>{completedCount}</strong>
        </div>
      </div>

      <div className="overview-card">
        <div className="overview-icon orange">
          <CalendarDays size={19} />
        </div>

        <div>
          <span>Due Today</span>
          <strong>{dueTodayCount}</strong>
        </div>
      </div>
    </section>
  );
}

export default Overview;