import React from 'react';
import PropTypes from 'prop-types';
const style = {
  margin: 12
};

const Counter = ({
  increment,
  incrementIfOdd,
  incrementAsync,
  decrement,
  counter
}) => (
  <div>
    Clicked: {counter} times
    <button className="button is-link" style={style} onClick={increment}>
      +
    </button>
    <button className="button is-link" style={style} onClick={decrement}>
      -
    </button>
    <br />
    <button className="button is-link" style={style} onClick={incrementIfOdd}>
      Increment if odd
    </button>
    <button
      className="button is-link"
      style={style}
      onClick={() => incrementAsync()}
    >
      Increment async
    </button>
  </div>
);

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
