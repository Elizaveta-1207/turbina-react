import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const StyledFooterLink = styled.a`
  color: #fff;

  &:hover {
    font-style: italic;
  }
`;

const FooterLink = ({ text, link }) => (<StyledFooterLink href={link} target="_blank">{text}</StyledFooterLink>);

FooterLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};
FooterLink.defaultProps = {
  link: 'https://praktikum.yandex.ru',
  // в идеале вынести бы куда-нибудь по внешний конфиг
};
export default FooterLink;
