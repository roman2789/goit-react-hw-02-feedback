const FeedbackOptions = ({ feedbackVariants, onFeedbackCklick }) => {
  return (
    <>
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
    </>
  );
};

export default FeedbackOptions;
