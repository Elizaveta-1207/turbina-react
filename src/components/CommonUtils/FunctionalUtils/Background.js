import React from 'react';
import styled from 'styled-components/macro';
import AppContext from '../../../contexts/AppContext';
import defaultBackground from '../../../images/background-bottom.jpg';

const LiveBackground = styled.div`
@keyframes rotation {
  100% {
    background-position: 0 300px;
  }
}
  background: url("../../images/background-top.jpg") top center no-repeat,
    url("../../images/background-bottom.jpg") bottom center no-repeat;
  transition: background-position 0.5s ease-out;
  position: fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(#212d80, #275b82, #4e7b6c, #9c9089, #eaa4a6, #a08590,#212d80);
  animation: rotation 15s linear infinite alternate;
  object-fit: cover;
`;

const Background = () => {
  const { background } = React.useContext(AppContext);

  return background.isStatic
    ? (
    <LiveBackground
      url={background.customImg
        ? background.customImgUrl
        : `url(${defaultBackground})`} />)
    : (<>no bg yet</>);
};

export default Background;
