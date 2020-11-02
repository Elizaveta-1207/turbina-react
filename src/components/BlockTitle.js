import React from 'react';
import PropTypes from 'prop-types';

export default function BlockTitle({ title }) {
  return <h2 className="info__title">{title}</h2>;
}

BlockTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
