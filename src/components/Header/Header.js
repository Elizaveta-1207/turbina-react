import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import LogoMarshak from '../CommonUtils/ImageUtils/LogoMarshak';
import LogoTurbina from '../CommonUtils/ImageUtils/LogoTurbina';
import VerticalLinksBar from './LinksBar/VerticalLinksBar';
import MediaPlayer from './MediaPlayer/MediaPlayer';
import AppContext from '../../contexts/AppContext';

const AppHeader = styled.header`
  box-sizing: border-box;
  padding: 15px 15px 0;
  height: calc(100vh - 10px);
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    height: calc(100vh - 10px);
  }

  @media screen and (max-width: 425px) {
    padding: 13px 5px 0;
  }
`;

export default function Header({ playlist }) {
  const { header } = React.useContext(AppContext);
  const { color } = header.style;

  return (
    <AppHeader>
      <LogoMarshak fill={color}/>
      <VerticalLinksBar color={color} />
      <LogoTurbina fill={color} />
      <MediaPlayer
        songs={playlist}
        color={color}/>
    </AppHeader>
  );
}

Header.propTypes = {
  playlist: PropTypes.array.isRequired,
};
