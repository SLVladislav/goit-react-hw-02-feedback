import { Component } from 'react';
import Statictics from './Statictics';
import Section from './Section';
import Notification from './Notofication';
import FeedbackOptions from './FeedbackOption';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option =>
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
      <div className={css.container}>
        <div className={css.wrapper}>
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleIncrement}
            />
          </Section>

          {this.countTotalFeedback() ? (
            <Section title={'Statistics'}>
              <Statictics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              />
            </Section>
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </div>
      </div>
    );
  }
}
