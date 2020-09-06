import React, { Component } from 'react';

import Wrapper from './Wrapper/Wrapper';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };

  render() {
    const feedback = this.state;

    const countTotalFeedback = feedback.good + feedback.neutral + feedback.bad;

    const countPositiveFeedbackPercentage = Math.round(
      (feedback.good / countTotalFeedback) * 100,
    );

    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </Wrapper>
    );
  }
}
