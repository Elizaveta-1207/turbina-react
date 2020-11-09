import React from 'react';
import PropTypes from 'prop-types';

const SvgImg = ({ viewBox, children, fill, title, description }) => (
    <svg
      style={{ width: 'inherit', height: 'inherit' }}
      role="img"
      aria-label={`${title} ${description}`}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <desc>{description}</desc>
    {children}
    </svg>
);

SvgImg.propTypes = {
  fill: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.array,
  viewBox: PropTypes.string,
};
SvgImg.defaultProps = {
  fill: '#fff',
  description: 'изображение на сайте Турбина',
  title: '',
  children: (<></>),
  viewBox: '0 0 50 50',
};

export default SvgImg;
