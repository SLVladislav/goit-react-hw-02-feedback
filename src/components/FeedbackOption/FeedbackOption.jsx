import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.wrap}>
      {options.map(option => {
        return (
          <button
            className={css.button}
            onClick={() => onLeaveFeedback(option)}
            key={option}
            type="button"
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
