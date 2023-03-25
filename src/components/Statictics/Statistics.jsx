import PropTypes from 'prop-types';
import css from './Statictics.module.css';

function Statictics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li className={css.item}>
        <p className={css.text}>
          Good: <span className={css.value}>{good}</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Neutral: <span className={css.value}>{neutral}</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Bad: <span className={css.value}>{bad}</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Total: <span className={css.value}>{total()}</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Positive feedback:
          <span className={css.value}>{positivePercentage()}</span>
        </p>
      </li>
    </ul>
  );
};

Statictics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statictics