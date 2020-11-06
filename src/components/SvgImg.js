import React from 'react';
import PropTypes from 'prop-types';

export default function SvgImg({ viewBox, children, fill, title = 'изображение', description = 'изображение на сайте' }) {
  return (
    <svg
      style={{ width: 'inherit', height: 'inherit' }}
      role="img"
      aria-label={title + description}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <desc>{description}</desc>
    {children}
    </svg>
  );
}

SvgImg.propTypes = {
  fill: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  viewBox: PropTypes.string.isRequired,
};
