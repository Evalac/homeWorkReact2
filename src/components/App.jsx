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

  render() {
    this.test();

    return (
      <>
        <div>
          <p>Please leave feedback</p>
          {Object.keys(this.state).map((key, index) => {
            return <button key={index}>{key}</button>;
          })}
          <p>Statistic</p>
          <ul></ul>
        </div>
      </>
    );
  }
}

export { App };
