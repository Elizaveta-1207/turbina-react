import React from 'react';
import PropTypes from 'prop-types';

export default function NavBarLink({ link, title }) {
  return (
    <a href={link} className="navbar-link" rel="noreferrer" target="_blank">
      {title}
    </a>
  );
}
NavBarLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
