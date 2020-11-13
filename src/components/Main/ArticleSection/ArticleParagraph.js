import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Paragraph = styled.p`
  margin: 0 0 22px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const ArticleParagraph = ({ content }) => (<Paragraph>{content}</Paragraph>);

ArticleParagraph.propTypes = {
  content: PropTypes.string,
};
export default ArticleParagraph;
