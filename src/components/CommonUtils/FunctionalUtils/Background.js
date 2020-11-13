import React from 'react';
import styled from 'styled-components/macro';
import AppContext from '../../../contexts/AppContext';

const LiveBackground = styled.div`
@keyframes rotation {
  100% {
    background-position: 0 300px;
  }
}
  transition: background-position 0.5s ease-out;
  position: fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(#212d80, #275b82, #4e7b6c, #9c9089, #eaa4a6, #a08590,#212d80);
  animation: rotation 15s linear infinite alternate;
  object-fit: cover;
  ${(props) => !!props.url && `
  background: ${props.url};
  animation: none;
  transition: none;
  background-size: cover;
  `}
`;

const Background = () => {
  const { background } = React.useContext(AppContext);
  return (
    <LiveBackground
      url={background.customImg && background.customImgUrl}/>
  );
};
export default Background;
