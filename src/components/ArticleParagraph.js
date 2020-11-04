import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleParagraph({ content }) {
  return <p className="info__paragraph">{content}</p>;
}
ArticleParagraph.propTypes = {
  content: PropTypes.string.isRequired,
};
