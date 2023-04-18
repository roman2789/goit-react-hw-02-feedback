const Statistics = ({
  title,
  goodFeedback,
  neutralFeedback,
  badFeedback,
  totalFeedbacks,
  goodFeedbackPercentage,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Good:{goodFeedback}</p>
      <p>Neutral:{neutralFeedback}</p>
      <p>Bad:{badFeedback}</p>
      <p>Total:{totalFeedbacks}</p>
      <p>Positive Feedback:{goodFeedbackPercentage}%</p>
    </div>
  );
};

export default Statistics;
