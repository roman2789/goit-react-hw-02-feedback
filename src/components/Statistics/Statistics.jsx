import PropTypes from 'prop-types';

const Statistics = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  totalFeedbacks,
  goodFeedbackPercentage,
}) => {
  return (
    <div>
      <p>Good:{goodFeedback}</p>
      <p>Neutral:{neutralFeedback}</p>
      <p>Bad:{badFeedback}</p>
      <p>Total:{totalFeedbacks}</p>
      <p>Positive Feedback:{goodFeedbackPercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  goodFeedback: PropTypes.number.isRequired,
  neutralFeedback: PropTypes.number.isRequired,
  badFeedback: PropTypes.number.isRequired,
  totalFeedbacks: PropTypes.number.isRequired,
  goodFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
