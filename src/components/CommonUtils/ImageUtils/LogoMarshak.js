import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const PublishingLogoWrap = styled.div`
  width: 50px;
  height: 50px;
  display: block;
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
  }
  
  @media screen and (max-width: 424px) {
    width: 32px;
    height: 32px;
  }
`;

const LogoMarshak = ({ fill }) => (
    <PublishingLogoWrap as="a"
      href="https://marshakbooks.ru/"
      rel="turbina"
      target="_blank">
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1.98864V26.1364V50H50L48.2249 0H42.3077L40.8284 17.0455H29.2899L28.4024 1.98864L20.1183 1.42045L21.3018 17.0455H8.87574L6.80473 1.42045L0 1.98864Z" fill={fill}/>
      </svg>
    </PublishingLogoWrap>
);

LogoMarshak.propTypes = {
  fill: PropTypes.string,
};

LogoMarshak.defaultProps = {
  fill: '#fff',
};

export default LogoMarshak;
