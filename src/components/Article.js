import React from 'react';
import PropTypes from 'prop-types';
import BlockTitle from './BlockTitle';
import ArticleParagraph from './ArticleParagraph';

export default function Article({ title, content }) {
  return (
    <article className="info__article">
      <BlockTitle title={title} />
      <div className="info__description">
        {content.map((paragraph, i) => (
        {/* индекс ни в каком виде нельзя использовать, даже при конкатенации. потому что у вас у каждого трека его key сейчас зависит от положения в массиве, а он не должен зависеть от этого) оставьте просто title */}
          <ArticleParagraph content={paragraph} key={`${title}-${i}`} />
        ))}
      </div>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
};
