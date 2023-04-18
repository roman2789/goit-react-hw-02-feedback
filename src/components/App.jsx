import { Component } from 'react';
import Feedback from './FeedbackSection/FeedbackSection';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrStateValues = evt => {
    const feedbackType = evt.target.name;
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return parseInt(
      ((this.countTotalFeedback() - (this.state.neutral + this.state.bad)) /
        this.countTotalFeedback()) *
        100
    );
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'start',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Feedback
          title="Please leave feedback"
          feedbackVariants={Object.keys(this.state)}
          onFeedbackCklick={this.handleIncrStateValues}
        />
        <Statistics
          title="Statistics"
          goodFeedback={good}
          neutralFeedback={neutral}
          badFeedback={bad}
          totalFeedbacks={this.countTotalFeedback()}
          goodFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
export default App;
