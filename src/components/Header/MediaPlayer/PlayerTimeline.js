import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Timeline = styled.div`
  grid-area: timeline;
  height: 6px;
  cursor: pointer;
  background-color: rgba(243, 243, 243, 0.3);

  @media screen and (max-width: 767px) {
    margin-top: 8px;
  }
`;

// eslint-disable-next-line react/prop-types
const PlayerTimeline = ({ onClick, children, ref }) => (
  <Timeline ref={ref} onClick={onClick}>
    {children}
  </Timeline>
);

PlayerTimeline.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

export default PlayerTimeline;
