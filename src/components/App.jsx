import { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import { Container } from './AppStyled';
import { GlobalStyles } from 'GlobalStyles';

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
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const goodFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <GlobalStyles />
        <Section title="Please leave feedback">
          <FeedbackOptions
            feedbackVariants={Object.keys(this.state)}
            onFeedbackCklick={this.handleIncrStateValues}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              goodFeedback={good}
              neutralFeedback={neutral}
              badFeedback={bad}
              totalFeedbacks={total}
              goodFeedbackPercentage={goodFeedbackPercentage}
            />
          )}
        </Section>
      </Container>
    );
  }
}
export default App;
