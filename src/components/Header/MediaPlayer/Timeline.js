import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import PlayHead from './StyledPlayerComponents/PlayHead';

const StyledTimeline = styled.div`
  grid-area: timeline;
  height: 4px;
  cursor: pointer;
  background-color: rgba(243, 243, 243, 0.3);
  @media screen and (max-width: 767px) {
    margin-top: 8px;
  }
`;

const Timeline = ({ handleTimelineChange, duration, playHeadWidth, color }) => {
  const timeline = React.useRef();
  const playhead = React.useRef();
  const [mouseDown, setMouseDown] = React.useState(false);

  const setTimelineXCoordinate = (eventX, left, right) => {
    if (eventX < left) {
      return left;
    }
    if (eventX > right) {
      return right;
    }
    return eventX;
  };

  const handleTimelineClick = (evt) => {
    const { left, right, width } = timeline.current.getBoundingClientRect();
    const targetX = setTimelineXCoordinate(evt.clientX, left, right);
    // определение targetX лучше вынести в отдельную функцию)
    // чтобы не создавать переопределяемую переменную
    // fixed
    const songProgressPercentage = (targetX - left) / width;
    const songProgressSeconds = Math.floor(duration * songProgressPercentage);
    handleTimelineChange(songProgressSeconds);
  };

  useEffect(() => {
    if (mouseDown) {
      window.addEventListener('mousemove', handleTimelineClick);
      window.addEventListener('mouseup', () => {
        setMouseDown(false);
        window.removeEventListener('mousemove', handleTimelineClick);
      }, { once: true });
      // fixed :) узнал про флаг once: true ! :)
      // блин он не не уберет так обработчик, это же совершенно
      // другая функция в коллбеке у вас тут лежит. удалять надо по ссылке
    }
  }, [mouseDown]);

  return (
    <StyledTimeline onClick={handleTimelineClick} ref={timeline}>
      <PlayHead
        onMouseDown={() => setMouseDown(true)}
        ref={playhead}
        width={playHeadWidth}
        color={color}/>
    </StyledTimeline>);
};

Timeline.propTypes = {
  playHeadWidth: PropTypes.string,
  duration: PropTypes.number,
  color: PropTypes.string,
  handleTimelineChange: PropTypes.func.isRequired,
};
export default Timeline;
