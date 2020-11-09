import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import SvgImg from '../../CommonUtils/ImageUtils/SvgImg';

const PlayButton = styled.button`
  color: inherit;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  cursor: pointer;
  outline: none;
  background: none;
  transition: opacity 0.3s ease-in-out;
  @media screen and (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
`;

const PlaybackButton = ({ color, isPlaying, handlePlaybackClick }) => (
    <PlayButton onClick={handlePlaybackClick}>
      <SvgImg
        viewBox="0 0 26 24"
        fill={color} >
        {isPlaying
          ? (<path fillRule="evenodd" clipRule="evenodd" d="M1 0C0.447266 0 0 0.447266 0 1V17C0 17.5527 0.447266 18 1 18H3C3.55273 18 4 17.5527 4 17V1C4 0.447266 3.55273 0 3 0H1ZM11 0C10.4473 0 10 0.447266 10 1V17C10 17.5527 10.4473 18 11 18H13C13.5527 18 14 17.5527 14 17V1C14 0.447266 13.5527 0 13 0H11Z" fill={color}/>)
          : (<path d="M18.47 11.3307C19.668 12.1211 19.668 13.8789 18.47 14.6693L3.10149 24.81C1.77177 25.6873 6.9507e-07 24.7337 7.64706e-07 23.1406L1.65123e-06 2.85939C1.72086e-06 1.2663 1.77177 0.312659 3.10149 1.19004L18.47 11.3307Z" fill={color}/>)}
      </SvgImg>
    </PlayButton>
);
PlaybackButton.propTypes = {
  handlePlaybackClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  color: PropTypes.string,
};

export default PlaybackButton;
