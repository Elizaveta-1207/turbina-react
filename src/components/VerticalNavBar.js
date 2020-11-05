import React from 'react';
import PropTypes from 'prop-types';
import NavBarLink from './NavBarLink';

export default function VerticalNavBar() {
  const [isMenuVisible, setIsMenuVisible] = React.useState(true);

  const handleButtonClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <div className="header__menu">
      <button className={`header__btn ${isMenuVisible ? 'header__btn_action_close' : 'header__btn_action_open'}`} onClick={handleButtonClick}></button>
      <ul className={`header__links ${isMenuVisible ? 'header__links_visible_on' : 'header__links_visible_off'}`}>
        <li className="header__item"><NavBarLink link="#" title="Яндекс.Музыка ↗" /></li>
        <li className="header__item"><NavBarLink link="#" title="Spotify ↗" /></li>
        <li className="header__item"><NavBarLink link="#" title="Apple Music ↗" /></li>
        <li className="header__item"><NavBarLink link="#" title="VK Music ↗" /></li>
      </ul>
    </div>
  );
}
VerticalNavBar.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
