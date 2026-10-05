import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  ListTodo,
} from "lucide-react";

function Overview() {
  return (
    <section className="overview">
      <div className="overview-card">
        <div className="overview-icon purple">
          <ListTodo size={19} />
        </div>

        <div>
          <span>Total Tasks</span>
          <strong>12</strong>
        </div>
      </div>

      <div className="overview-card">
        <div className="overview-icon blue">
          <Clock3 size={19} />
        </div>

        <div>
          <span>In Progress</span>
          <strong>7</strong>
        </div>
      </div>

      <div className="overview-card">
        <div className="overview-icon green">
          <CheckCircle2 size={19} />
        </div>

        <div>
          <span>Completed</span>
          <strong>5</strong>
        </div>
      </div>

      <div className="overview-card">
        <div className="overview-icon orange">
          <CalendarDays size={19} />
        </div>

        <div>
          <span>Due Today</span>
          <strong>3</strong>
        </div>
      </div>
    </section>
  );
}

export default Overview;