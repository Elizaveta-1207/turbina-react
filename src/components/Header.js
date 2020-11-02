import React from 'react';
import logoMarshak from '../images/logo-marshak.svg';
import logoTurbina from '../images/logo-turbina.svg';
import VerticalNavBar from './VerticalNavBar';

export default function Header() {
  return (
    <header className="header">
    <a href="https://marshakbooks.ru/" className="publishing-logo" rel="noreferrer" target="_blank">
      <img className="publishing-logo__img" src={logoMarshak} alt="Логотип издательства" /></a>
    <VerticalNavBar />
    <h1 className="header__app-logo" >
      <img src={logoTurbina} alt="Турбина" />
    </h1>
  </header>
  );
}
