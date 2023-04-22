import PropTypes from 'prop-types';
import { FeedbackSection, FeedbackButtons } from './FeedbackOptionsStyled';

const FeedbackOptions = ({ feedbackVariants, onFeedbackCklick }) => {
  return (
    <FeedbackSection>
      {feedbackVariants.map(feedbackVariant => (
        <FeedbackButtons
          key={feedbackVariant}
          type="button"
          onClick={onFeedbackCklick}
          name={feedbackVariant}
        >
          {feedbackVariant}
        </FeedbackButtons>
      ))}
    </FeedbackSection>
  );
};

FeedbackOptions.propTypes = {
  feedbackVariants: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFeedbackCklick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
