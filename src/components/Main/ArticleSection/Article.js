import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import ArticleParagraph from './ArticleParagraph';
import BlockTitle from '../../CommonUtils/TextUtils/BlockTitle';

const InfoArticle = styled.article`
  margin-bottom: 92px;
  max-width: 760px;
  font-size: 16px;
  line-height: 22px;
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

const Article = ({ title, content }) => (
    <InfoArticle>
      <BlockTitle title={title} />
        {content.map((paragraph, i) => (
          <ArticleParagraph content={paragraph} key={`${title}-${i}`} />
        ))}
    </InfoArticle>
);
Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};
export default Article;
