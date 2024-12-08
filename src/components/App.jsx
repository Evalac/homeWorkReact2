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
    // this.test();

    return (
      <>
        <div>
          <p>Please leave feedback</p>
          {Object.keys(this.state).map((key, index) => {
            return <button key={index}>{key}</button>;
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
          </ul>
        </div>
      </>
    );
  }
}

export { App };
