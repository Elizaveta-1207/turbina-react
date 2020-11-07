import React from 'react';
import PropTypes from 'prop-types';

export default function BlockSubtitle({ subtitle }) {
  return <p className="info__subtitle">{subtitle}</p>;
}
// тут тоже будет лучше переделать под arrow-function

BlockSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
