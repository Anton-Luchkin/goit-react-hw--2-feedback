import React from 'react';
import PropTypes from 'prop-types';

import Notification from './Notification/Notification';

import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <section>
      <h2 className={s.title}>Statistics</h2>
      <div className={s.container}>
        {total > 0 ? (
          <>
            <p className={s.item}>Good: {good}</p>
            <p className={s.item}>Neutral: {neutral}</p>
            <p className={s.item}>Bad: {bad}</p>
            <p className={s.item}>Total: {total}</p>
            <p className={s.item}>Positive feedback: {positivePercentage}%</p>
          </>
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    </section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
