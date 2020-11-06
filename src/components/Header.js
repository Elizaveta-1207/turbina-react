import React from 'react';
import PropTypes from 'prop-types';
import LogoMarshak from './LogoMarshak';
import LogoTurbina from './LogoTurbina';
import VerticalLinksBar from './VerticalLinksBar';
import MediaPlayer from './MediaPlayer';
import AppContext from '../contexts/AppContext';

export default function Header({ songs, currentSong }) {
  const { header } = React.useContext(AppContext);
  const { color } = header.style;

  return (
    <header className="header">
      <a
        href="https://marshakbooks.ru/"
        className="publishing-logo"
        rel="noreferrer"
        target="_blank"
      >
        <LogoMarshak fill={color}/>
      </a>
      <VerticalLinksBar color={color} />
      <h1 className="header__logo-wrapper">
        <LogoTurbina fill={color} />
      </h1>
      <MediaPlayer
        songs={songs}
        currentSong={currentSong}
        color={color}/>
    </header>
  );
}

Header.propTypes = {
  songs: PropTypes.array.isRequired,
  currentSong: PropTypes.object.isRequired,
};
