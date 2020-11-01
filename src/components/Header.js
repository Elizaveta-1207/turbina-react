import React from 'react';
import logoMarshak from '../images/logo-marshak.svg';
import logoTurbina from '../images/logo-turbina.svg';

export default function Header() {
  return (
    <header className="header">
    <a href="#" className="header__publishing-logo" target="_blank"> {logoMarshak}
      {/* <img src="./images/publishing-logo.svg" alt="Логотип издательства" /> */}</a>
    <nav className="header__menu">
      <a href="#" className="header__link" target="_blank">Яндекс.Музыка ↗</a>
      <a href="#" className="header__link" target="_blank">Spotify ↗</a>
      <a href="#" className="header__link" target="_blank">Apple Music ↗</a>
      <a href="#" className="header__link" target="_blank">VK Music ↗</a>
    </nav>
    <img src={logoTurbina} alt="Логотип приложения" className="header__app-logo" />
  </header>
  );
}
