import React from 'react';
import PropTypes from 'prop-types';

export default function BlockSubtitle({ subtitle }) {
  return <p className="info__subtitle">{subtitle}</p>;
}

BlockSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
