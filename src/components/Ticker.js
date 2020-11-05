import React from 'react';
import PropTypes from 'prop-types';

export default function Ticker(props) {
  // eslint-disable-next-line no-unused-vars
  const { children, duration = '15s', active = true } = props;
  return (<div className={active && 'ticker'}>
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
