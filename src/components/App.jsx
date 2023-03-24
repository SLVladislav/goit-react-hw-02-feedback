import React, { Component } from 'react';
import { Statictics } from './Statictics/Statistics';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option =>
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });

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
        <Section title="Please leave feedback">
          {Object.keys(this.state).map(option => {
            return (
              <button
                onClick={() => this.onLeaveFeedback(option)}
                key={option}
                type="button"
              >
                {option}
              </button>
            );
          })}
        </Section>

        <Section title="Statistics">
          <Statictics
            good={this.good}
            neutral={this.neutral}
            bad={this.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statictics>
        </Section>
      </div>
    );
  }
}
