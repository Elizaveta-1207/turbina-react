import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledLink = styled.a`
  display: block;
  padding: 8px 20px;
  color: inherit;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;
  border: 2px solid;
  border-color: inherit;
  box-sizing: border-box;
  border-radius: 30px;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;

  &:first-of-type {
    margin-top: 0;
  }
  &:hover {
    font-style: italic;
  }
  @media screen and (max-width: 767px) {
    padding: 7px 16px;
    font-size: 14px;
  }
  
  @media screen and (max-width: 424px) {
    padding: 7px 14px;
    font-size: 12px;
  }
`;

const NavBarLink = ({ link, title }) => (
    <StyledLink href={link} rel="noreferrer" target="_blank">
      {title}
    </StyledLink>
);
NavBarLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavBarLink;
