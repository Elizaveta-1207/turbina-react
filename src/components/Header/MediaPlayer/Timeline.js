import React from 'react';
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

  const handleTimelineClick = (evt) => {
    const { left, right, width } = timeline.current.getBoundingClientRect();
    let targetX;
    if (evt.clientX < left) {
      targetX = left;
    } else if (evt.clientX > right) {
      targetX = right;
    } else {
      targetX = evt.clientX;
    }
    // определение targetX лучше вынести в отдельную функцию) чтобы не создавать переопределяемую переменную 
    const songProgressPercentage = (targetX - left) / width;
    const songProgressSeconds = Math.floor(duration * songProgressPercentage);
    handleTimelineChange(songProgressSeconds);
  };

  const handlePlayheadDrag = () => {
    let mouseDown = true;
    window.addEventListener('mouseup', () => {
      mouseDown = false;
      window.removeEventListener('mouseup', () => {});
      // блин он не не уберет так обработчик, это же совершенно другая функция в коллбеке у вас тут лежит. удалять надо по ссылке
    });
    window.addEventListener('mousemove', (evt) => {
      if (mouseDown) handleTimelineClick(evt);
    });
  };

  return (
    <StyledTimeline onClick={handleTimelineClick} ref={timeline}>
      <PlayHead
        onMouseDown={handlePlayheadDrag}
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
