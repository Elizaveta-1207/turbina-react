import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledSubtitle = styled.h3`
  font-size: 16px;
  line-height: 1.4;
  font-weight: normal;
  margin: 0 0 60px;

  @media screen and (max-width: 1023px) {
    font-size: 15px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 36px;
  }
  @media screen and (max-width: 424px) {
    font-size: 12px;
    margin-bottom: 30px;
  }
`;

const BlockSubtitle = ({ subtitle }) => <StyledSubtitle>{subtitle}</StyledSubtitle>;

BlockSubtitle.propTypes = {
  subtitle: PropTypes.string,
};

export default BlockSubtitle;
