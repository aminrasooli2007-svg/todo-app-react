function ProgressCard({
  completedCount,
  totalCount,
}) {
  const progress =
    totalCount === 0
      ? 0
      : Math.round(
          (completedCount / totalCount) * 100
        );

  return (
    <section className="progress-card">
      <div className="progress-info">
        <div>
          <span>Daily progress</span>
          <strong>{progress}%</strong>
        </div>

        <p>
          {completedCount} of {totalCount} tasks completed
        </p>
      </div>

      <div className="progress-bar">
        <div
          className="progress-value"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </section>
  );
}

export default ProgressCard;