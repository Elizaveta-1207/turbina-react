import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const CloseButtonWrap = styled.div`
  width: 30px;
  height: 30px;
  display: block;
  cursor: inherit;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  margin-bottom: 10px;
  
  &:hover {
    opacity: 0.6;
  }
  
  @media screen and (max-width: 767px) {
    ${(props) => props.isBlurred
      && `
      transition: filter 2s;
      filter: blur(5px);
      opacity: .5;`}
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

const CloseButton = ({ onClick, fill }) => (
    <CloseButtonWrap
    onClick={onClick}>
      <SvgButton
        viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <ClickablePath fill="transparent" stroke={fill} stroke-width="5" stroke-miterlimit="22.9256" d="M14.98 2.4l0 0c6.94,0 12.57,5.63 12.57,12.57l0 0c0,6.95 -5.63,12.58 -12.57,12.58l0 0c-6.95,0 -12.58,-5.63 -12.58,-12.58l0 0c0,-6.94 5.63,-12.57 12.58,-12.57z"/>
            <line fill={fill} stroke={fill} strokeWidth="3" strokeMiterlimit="22" x1="9.89" y1="9.89" x2="20.11" y2= "20.11" />
            <line fill={fill} stroke={fill} strokeWidth="3" strokeMiterlimit="22" x1="9.89" y1="20.11" x2="20.11" y2= "9.89" />
          </g>
      </SvgButton>
    </CloseButtonWrap>
);

CloseButton.propTypes = {
  fill: PropTypes.string,
  onClick: PropTypes.func,
};

CloseButton.defaultProps = {
  fill: '#fff',
};

export default CloseButton;
