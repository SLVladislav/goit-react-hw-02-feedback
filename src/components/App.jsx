import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option =>
    this.setState(previouseState => ({ [option]: previouseState[option] + 1 }));
 

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }

    return `${result}%`;
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="submit">Good</button>
          <button type="submit">Neutral</button>
          <button type="submit">Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li >{this.state.good}</li>
            <li>{this.state.neutral}</li>
            <li>{this.state.bad}</li>
          </ul>
        </div>
      </div>
    );
  }
}
