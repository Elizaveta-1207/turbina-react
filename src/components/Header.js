import React from 'react';
import PropTypes from 'prop-types';
import logoMarshak from '../images/logo-marshak.svg';
import logoTurbina from '../images/logo-turbina.svg';
import VerticalNavBar from './VerticalNavBar';
import MediaPlayer from './MediaPlayer';

export default function Header({ songs, currentSong }) {
  return (
    <header className="header">
      <a
        href="https://marshakbooks.ru/"
        className="publishing-logo"
        rel="noreferrer"
        target="_blank"
      >
        <img className="publishing-logo__img" src={logoMarshak} alt="Логотип издательства" />
      </a>
      <VerticalNavBar />
      <h1 className="header__logo-wrapper">
        <img src={logoTurbina} alt="Турбина" className="header__app-logo" />
      </h1>
      <MediaPlayer
          songs={songs}
          currentSong={currentSong} />
    </header>
  );
}

Header.propTypes = {
  songs: PropTypes.array.isRequired,
  currentSong: PropTypes.object.isRequired,
};
