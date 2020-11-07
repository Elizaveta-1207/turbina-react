import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleParagraph({ content }) {
  return <p className="info__paragraph">{content}</p>;
}
// старайтесь такие компоненты делать стрелочными функциями чтобы экономить место и не прописывать return 
ArticleParagraph.propTypes = {
  content: PropTypes.string.isRequired,
};
