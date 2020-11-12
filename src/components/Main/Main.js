import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import FormSection from './FormSection/FormSection';
import Article from './ArticleSection/Article';
import AppContext from '../../contexts/AppContext';

const MainInfo = styled.main`
  background-color: #fff;
  border-radius: 10px;
  padding: 110px 50px;
  color: #000;
  z-index: 10;

  @media screen and (max-width: 1279px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
  @media screen and (max-width: 767px) {
    padding: 80px 20px;
  }
`;

export default function Main({ onFormSubmit }) {
  const { texts } = React.useContext(AppContext);
  return (
    <MainInfo>
      <Article
        title={texts.article1.title}
        content={texts.article1.content} />
      <Article
        title={texts.article2.title}
        content={texts.article2.content} />
      <Article
        title={texts.article3.title}
        content={texts.article3.content} />
      <FormSection onFormSubmit={onFormSubmit} />
    </MainInfo>
  );
}
Main.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
