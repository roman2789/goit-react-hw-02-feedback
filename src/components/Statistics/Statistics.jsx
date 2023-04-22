import PropTypes from 'prop-types';
import { StatisticsWrapper, StatItems } from './StatisticsStyled';

const Statistics = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  totalFeedbacks,
  goodFeedbackPercentage,
}) => {
  return (
    <StatisticsWrapper>
      <StatItems>Good:{goodFeedback}</StatItems>
      <StatItems>Neutral:{neutralFeedback}</StatItems>
      <StatItems>Bad:{badFeedback}</StatItems>
      <StatItems>Total:{totalFeedbacks}</StatItems>
      <StatItems>Positive Feedback:{goodFeedbackPercentage}%</StatItems>
    </StatisticsWrapper>
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
