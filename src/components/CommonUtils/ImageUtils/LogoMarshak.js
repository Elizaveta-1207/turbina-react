import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const PublishingLogoWrap = styled.div`
  width: 50px;
  height: 50px;
  display: block;
  cursor: inherit;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  
  &:hover {
    opacity: 0.6;
  }
  @media screen and (max-width: 1023px) {
    width: 45px;
    height: 45px;
  }
  
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    ${(props) => props.isBlurred
      && `
      transition: filter 2s;
      filter: blur(5px);
      opacity: .5;`}
  }
  
  @media screen and (max-width: 424px) {
    width: 32px;
    height: 32px;
  }
`;
const ClickablePath = styled.path`
cursor: pointer;
`;
const SvgButton = styled.svg`
width: 100%;
height: 100%;
pointer-events: all;
`;

const LogoMarshak = ({ link, fill, isBlurred }) => (
    <PublishingLogoWrap
    isBlurred={isBlurred}
    rel="turbina"
    as="a"
    target="_blank"
    href={link}>
      <SvgButton
        viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ClickablePath d="M0 1.98864V26.1364V50H50L48.2249 0H42.3077L40.8284 17.0455H29.2899L28.4024 1.98864L20.1183 1.42045L21.3018 17.0455H8.87574L6.80473 1.42045L0 1.98864Z" fill={fill}/>
      </SvgButton>
    </PublishingLogoWrap>
);

LogoMarshak.propTypes = {
  fill: PropTypes.string,
  isBlurred: PropTypes.bool,
  link: PropTypes.string,
};

LogoMarshak.defaultProps = {
  fill: '#fff',
  isBlurred: false,
  link: '#',
};

export default LogoMarshak;
