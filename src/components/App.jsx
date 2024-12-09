import { Component } from 'react';

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
          {Object.keys(this.state).map((key, index) => {
            return (
              <button key={index} onClick={() => this.buttonClick(key)}>
                {key}
              </button>
            );
          })}
          <p>Statistic</p>
          <ul>
            {Object.entries(this.state).map(([key, value], index) => {
              const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);

              return (
                <li key={index}>
                  {capitalizedKey}: {value}
                </li>
              );
            })}
            <li>
              <p>Total: {totalFeedback}</p>
            </li>
            <li>
              <p>Positive feedback: {percentagePositives}</p>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export { App };
