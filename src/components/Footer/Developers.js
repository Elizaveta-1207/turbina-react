import styled from 'styled-components/macro';
import React from 'react';
import PropTypes from 'prop-types';

const DevelopersParagraph = styled.p`
  margin: 0;
  font-weight: normal;
  font-size: 16px;
  font-family: Inter, Arial, sans-serif;
  line-height: 22px;
  text-decoration: none;

  @media screen and (max-width: 1023px) {
    font-size: 16px;
  }
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
  @media screen and (max-width: 424px) {
    font-size: 12px;
  }
`;
const Developers = ({ children }) => (<DevelopersParagraph>{children}</DevelopersParagraph>);

Developers.propTypes = {
  children: PropTypes.object,
};

export default Developers;
