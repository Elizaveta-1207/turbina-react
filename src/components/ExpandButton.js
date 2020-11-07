import React from 'react';
import PropTypes from 'prop-types';
import SvgImg from './SvgImg';

export default function ExpandButton({ color, isExpanded, onClick }) {
  const handleClick = () => {
    onClick();
  };


  // функция которая вызывает функцию и больше ничего не делает - лучше таких штук избегать, а сразу вызывать onClick)

  return (
    <button
    className="player__btn player__btn_type_expand"
    onClick={handleClick}>
      <SvgImg
        viewBox="0 0 24 24"
        fill={color}
       >
        {isExpanded
          ? (<path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37256 24 0 18.6274 0 12C0 5.37256 5.37256 0 12 0C18.6274 0 24 5.37256 24 12ZM10.5867 12L7.05115 8.46448L8.46533 7.05023L12.001 10.5858L15.5365 7.05023L16.9507 8.46448L13.4152 12L16.9507 15.5355L15.5365 16.9498L12.001 13.4142L8.46533 16.9498L7.05115 15.5355L10.5867 12Z" fill={color}/>)

          : (<path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12.6402 8.23178L12 7.69829L11.3598 8.23178L5.35982 13.2318L6.64018 14.7682L12 10.3017L17.3598 14.7682L18.6402 13.2318L12.6402 8.23178Z" fill={color}/>)
        }
      </SvgImg>
      {/* лучше каждую иконки делать отдельными компонентами) https://blog.bitsrc.io/transform-an-svg-into-a-react-component-with-svgr-8d2ba10f424c */}
    </button>
  );
}
ExpandButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};
