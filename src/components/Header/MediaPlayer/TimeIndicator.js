import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Indicator = styled.div`
  cursor: pointer;
  grid-area: duration;
  justify-self: end;
  display: flex;
  align-items: flex-end;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.2;
  color: inherit;
  @media screen and (max-width: 1023px) {
    font-size: 20px;
  }
  @media screen and (max-width: 767px) {
    align-items: center;
    font-size: 18px;
  }
  @media screen and (max-width: 424px) {
    font-size: 14px;
  }
`;

const TimeIndicator = ({ currentTime, duration }) => {
  const modes = ['elapsed', 'remained', 'elapsed/duration'];

  const [timeString, setTimeString] = React.useState('00:00');
  const [indicationMode, setIndicationMode] = React.useState('elapsed');

  React.useEffect(() => {
    const sElapsed = `${Math.floor(currentTime % 60)}`.padStart(2, '0');
    const mElapsed = Math.floor(currentTime / 60);
    const remained = duration - currentTime;
    const secRemained = `${Math.floor(remained % 60)}`.padStart(2, '0');
    const minRemained = Math.floor(remained / 60);
    const secDuration = `${Math.floor(duration % 60)}`.padStart(2, '0');
    const minDuration = Math.floor(duration / 60);
    switch (indicationMode) {
      case 'elapsed':
        setTimeString(`${mElapsed}:${sElapsed}`);
        break;
      case 'remained':
        setTimeString(`${minRemained}:${secRemained}`);
        break;
      case 'elapsed/duration':
      // eslint-disable-next-line no-restricted-globals
        if (!isNaN(duration)) setTimeString(`${mElapsed}:${sElapsed}/${minDuration}:${secDuration}`);
        break;
      default:
        throw new Error(`no such mode in TimeIndicator module. Mode: ${indicationMode}`);
    }
  }, [currentTime, duration, indicationMode]);

  const handleIndicatorClick = () => {
    const currentIndex = modes.indexOf(indicationMode);
    const newIndex = (currentIndex + 1 < modes.length) ? currentIndex + 1 : 0;
    setIndicationMode(modes[newIndex]);
  };

  return (
    <Indicator onClick={() => handleIndicatorClick()}>
      {timeString}
    </Indicator>
  );
};

TimeIndicator.propTypes = {
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default TimeIndicator;
