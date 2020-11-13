import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const StyledFooterLink = styled.a`
  color: #fff;

  &:hover {
    font-style: italic;
  }
`;

export default function FooterLink({ text, link }) {
  return (<StyledFooterLink href={link} target="_blank">{text}</StyledFooterLink>);
}

FooterLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};
FooterLink.defaultProps = {
  link: 'https://praktikum.yandex.ru',
};