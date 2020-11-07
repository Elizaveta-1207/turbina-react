import React from 'react';
import styled from 'styled-components/macro';
import AppContext from '../contexts/AppContext';
/* import PropTypes from 'prop-types'; */

const StaticBackground = styled.div`
  background: 
  url('../../images/background-bottom.jpg') center no-repeat;
  transition: background-position 0.5s ease-out;
  position: fixed;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export default function Background() {
  const { background } = React.useContext(AppContext);

  return background.isStatic && (
    <StaticBackground style={background.customBackground ? background.style : {}} />
  );
}
