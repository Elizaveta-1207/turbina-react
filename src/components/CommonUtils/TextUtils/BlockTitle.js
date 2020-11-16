import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledBlockTitle = styled.h2`
  font-weight: normal;
  font-style: italic;
  font-size: 50px;
  line-height: 1.2;
  margin: 0 0 40px;
  text-transform: uppercase;

  @media screen and (max-width: 1279px) {
    font-size: 46px;
  }
  @media screen and (max-width: 1023px) {
    font-size: 42px;
  }
  @media screen and (max-width: 767px) {
    font-size: 36px;
    margin-bottom: 36px;
  }
  @media screen and (max-width: 424px) {
    font-size: 30px;
    margin-bottom: 32px;
  }
`;

const BlockTitle = ({ title }) => <StyledBlockTitle>{title}</StyledBlockTitle>;
// выглядит так будто лишние скобки)
// fixed

BlockTitle.propTypes = {
  title: PropTypes.string,
};

export default BlockTitle;
