import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const PlayButton = styled.button`
  grid-area: button;
  color: inherit;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  ${(props) => (props.isExpanded
    ? 'justify-self: start'
    : 'justify-self: center')};

  @media screen and (max-width: 767px) {
    width: 16px;
    height: 16px;
    justify-self: start;
  }
`;
const ClickablePath = styled.path`
cursor: pointer;
transition: opacity 0.3s ease-in-out;
&:hover {
  opacity: .6;
}
`;
const SvgButton = styled.svg`
width: 100%;
height: 100%;
`;

const PlaybackButton = ({ color, isPlaying, handlePlaybackClick }) => (
    <PlayButton>
      <SvgButton onClick={handlePlaybackClick}
        viewBox="0 0 50 50"
        fill={color} >
        {isPlaying
          ? <>(
          <ClickablePath d="M9.56 2.07l5.74 0c1.58,0 2.87,1.29 2.87,2.87l0 40.19c0,1.58 -1.29,2.87 -2.87,2.87l-5.74 0c-1.59,0 -2.87,-1.29 -2.87,-2.87l0 -40.19c0,-1.58 1.28,-2.87 2.87,-2.87z" fill={color}/>
          <ClickablePath d="M35.39 2.07l5.74 0c1.59,0 2.87,1.29 2.87,2.87l0 40.19c0,1.58 -1.28,2.87 -2.87,2.87l-5.74 0c-1.59,0 -2.87,-1.29 -2.87,-2.87l0 -40.19c0,-1.58 1.28,-2.87 2.87,-2.87z" fill={color}/>
          )
          </>
          : (<ClickablePath d="M42.91 21.38c2.26,1.46 2.26,4.73 0,6.19l-29.05 18.81c-2.51,1.63 -5.86,-0.14 -5.86,-3.09l0 -37.63c0,-2.95 3.35,-4.72 5.86,-3.09l29.05 18.81z" fill={color}/>)}
      </SvgButton>
    </PlayButton>
);
PlaybackButton.propTypes = {
  handlePlaybackClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  color: PropTypes.string,
};

export default PlaybackButton;
