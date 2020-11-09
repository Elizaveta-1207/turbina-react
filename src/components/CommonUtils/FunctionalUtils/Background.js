import React from 'react';
import styled from 'styled-components/macro';
import AppContext from '../../../contexts/AppContext';
import defaultBackground from '../../../images/background-bottom.jpg';

const StaticBackground = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => props.url};
  transition: background-position 0.5s ease-out;
  position: fixed;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export default function Background() {
  const { background } = React.useContext(AppContext);

  return background.isStatic
    ? (
    <StaticBackground
      url={background.customImg
        ? background.customImgUrl
        : `url(${defaultBackground})`} />)
    : (<>no bg yet</>);
}
