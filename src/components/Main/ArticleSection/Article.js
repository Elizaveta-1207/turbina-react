import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import ArticleParagraph from './ArticleParagraph';
import BlockTitle from '../../CommonUtils/TextUtils/BlockTitle';

const InfoArticle = styled.article`
  margin-bottom: 90px;
  max-width: 716px;
  font-size: 16px;
  line-height: 1.2;
  font-weight: normal;

  @media screen and (max-width: 1023px) {
    font-size: 15px;
    margin-bottom: 48px;
  }

  @media screen and (max-width: 424px) {
    font-size: 12px;
    margin-bottom: 36px;
  }
`;

export default function Article({ title, content }) {
  return (
    <InfoArticle>
      <BlockTitle title={title} />
        {content.map((paragraph, i) => (
          <ArticleParagraph content={paragraph} key={`${title}-${i}`} />
        ))}
    </InfoArticle>
  );
}
Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};
