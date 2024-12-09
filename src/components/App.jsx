import { Component } from 'react';
import { Statistic } from './Statistics/Statistics';
import { FeedbackButton } from './FeedbackOptions/FeedbackButton';

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
    return this.state.good + this.state.neutral + this.state.bad;
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
          <p>Please leave feedback</p>
          <FeedbackButton state={this.state} leaveFeedback={this.buttonClick} />
          <p>Statistic</p>
        </div>
        <Statistic
          state={this.state}
          totalFeedback={totalFeedback}
          percentagePositives={percentagePositives}
        />
      </>
    );
  }
}

export { App };
