import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import './app.css';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // constructor(props) {
  //   super(props);
  // }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  onLeaveFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  // incrementGood = () => {
  //   this.setState({ good: this.state.good + 1 });
  // };

  // incrementNeutral = () => {
  //   this.setState({ neutral: this.state.neutral + 1 });
  // };

  // incrementBad = () => {
  //   this.setState({ bad: this.state.bad + 1 });
  // };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['Good', 'Neutral', 'Bad'];
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
