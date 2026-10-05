function ProgressCard() {
  return (
    <section className="progress-card">
      <div className="progress-info">
        <div>
          <span>Daily progress</span>
          <strong>42%</strong>
        </div>

        <p>5 of 12 tasks completed</p>
      </div>

      <div className="progress-bar">
        <div className="progress-value"></div>
      </div>
    </section>
  );
}

export default ProgressCard;