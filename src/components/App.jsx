import { Component } from 'react';
import { Statistic } from './Statistics/Statistics';
import { FeedbackButton } from './FeedbackOptions/FeedbackButton';

import { ValidationContact } from './Contact/ValidationContact/ValidationContact';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  test = () => {
    console.log(this.state);
    console.log(Object.keys(this.state));
  };

  buttonClick = key => {
    console.log([key], key);

    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    // this.test();

    const totalFeedback = this.countTotalFeedback();
    const percentagePositives = this.countPositiveFeedbackPercentage();

    return (
      <>
        <div>
          <h1>Please leave feedback</h1>
          <FeedbackButton state={this.state} leaveFeedback={this.buttonClick} />
        </div>
        <Statistic
          state={this.state}
          totalFeedback={totalFeedback}
          percentagePositives={percentagePositives}
          notificationMessage="There is no feedback"
        />
      </>
    );
  }
}

export { App };
