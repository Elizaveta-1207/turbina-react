import React from 'react';
import PropTypes from 'prop-types';
import NavBarLink from './NavBarLink';

export default function VerticalLinksBar({ color }) {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const handleButtonClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <div className="vertical-links-bar" style={{ color }}>
      <button
        className={`vertical-links-bar__btn ${isMenuVisible ? 'vertical-links-bar__btn_action_close' : 'vertical-links-bar__btn_action_open'}`}
        onClick={handleButtonClick}>
      </button>
      <ul className={`vertical-links-bar__links ${isMenuVisible ? 'vertical-links-bar__links_visible_on' : 'vertical-links-bar__links_visible_off'}`}>
        <li className="vertical-links-bar__item"><NavBarLink link="#" title="Яндекс.Музыка ↗" /></li>
        <li className="vertical-links-bar__item"><NavBarLink link="#" title="Spotify ↗" /></li>
        <li className="vertical-links-bar__item"><NavBarLink link="#" title="Apple Music ↗" /></li>
        <li className="vertical-links-bar__item"><NavBarLink link="#" title="VK Music ↗" /></li>
      {/* лучше выделить их в конфиги, чтобы это можно было быстро редактировать) сделайте тупо массив объектов с тайтлом и ссылкой и рендерите через map */}
      </ul>
    </div>
  );
}
VerticalLinksBar.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
