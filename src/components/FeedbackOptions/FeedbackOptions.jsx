import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  feedbackVariants: PropTypes.array.isRequired,
  onFeedbackCklick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
