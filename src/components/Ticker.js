import React from 'react';
import PropTypes from 'prop-types';

export default function Ticker(props) {
  const { children, duration = '15s', active = false } = props;
  return (
    <div className={active && 'ticker'}>
      <div className={active && 'ticker__wrap'} style={{ animationDuration: duration }}>
        <div className={active && 'ticker__item'}>
          {children}
        </div>
      </div>
    </div>);
}

Ticker.propTypes = {
  duration: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  active: PropTypes.bool.isRequired,
};
