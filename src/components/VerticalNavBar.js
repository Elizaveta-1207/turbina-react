import React from 'react';
import PropTypes from 'prop-types';
import NavBarLink from './NavBarLink';

export default function VerticalNavBar() {
  return (
    <nav className="header__menu">
      <NavBarLink link="#" title="Яндекс.Музыка ↗" />
      <NavBarLink link="#" title="Spotify ↗" />
      <NavBarLink link="#" title="Apple Music ↗" />
      <NavBarLink link="#" title="VK Music ↗" />
    </nav>
  );
}
VerticalNavBar.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
