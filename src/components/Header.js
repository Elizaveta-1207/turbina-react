import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import LogoMarshak from './LogoMarshak';
import LogoTurbina from './LogoTurbina';
import VerticalLinksBar from './VerticalLinksBar';
import MediaPlayer from './MediaPlayer';
import AppContext from '../contexts/AppContext';

const AppHeader = styled.header`
  box-sizing: border-box;
  padding: 20px 10px 0;
  height: calc(100vh - 20px);
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    height: calc(100vh - 10px);
  }
`;

export default function Header({ songs, currentSong }) {
  const { header } = React.useContext(AppContext);
  const { color } = header.style;

  return (
    <AppHeader>
      <LogoMarshak fill={color}/>
      <VerticalLinksBar color={color} />
      <LogoTurbina fill={color} />
      <MediaPlayer
        songs={songs}
        currentSong={currentSong}
        color={color}/>
    </AppHeader>
  );
}

Header.propTypes = {
  songs: PropTypes.array.isRequired,
  currentSong: PropTypes.object.isRequired,
};
