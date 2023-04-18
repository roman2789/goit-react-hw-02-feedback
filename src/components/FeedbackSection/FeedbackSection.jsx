const Feedback = ({ title, feedbackVariants, onFeedbackCklick }) => {
  return (
    <div>
      <h1>{title}</h1>
      {feedbackVariants.map(feedbackVariant => (
        <button
          key={feedbackVariant}
          type="button"
          onClick={onFeedbackCklick}
          name={feedbackVariant}
        >
          {feedbackVariant}
        </button>
      ))}
    </div>
  );
};

export default Feedback;
