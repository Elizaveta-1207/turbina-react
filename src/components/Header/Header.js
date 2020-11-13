import React, { useState } from 'react';
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

const Header = ({ playlist }) => {
  const { header, marshakLink } = React.useContext(AppContext);
  const { color } = header.style;
  const [isPlayingLogo, setIsPlayingLogo] = useState();
  const [border, setBorder] = useState();
  const [isExpandedPlayer, setIsExpandedPlayer] = useState();

  return (
    <AppHeader>
      <LogoMarshak link={marshakLink} isBlurred={isExpandedPlayer} fill={color}/>
      <VerticalLinksBar isBlurred={isExpandedPlayer} color={color} />
      <LogoTurbina
        isBlurred={isExpandedPlayer}
        fill={color}
        isPlaying={isPlayingLogo}
        border={border} />
      <MediaPlayer
        playlist={playlist}
        setIsExpandedPlayer={setIsExpandedPlayer}
        songs={playlist}
        color={color}
        setIsPlayingLogo={setIsPlayingLogo}
        setBorder={setBorder}/>
    </AppHeader>
  );
};

Header.propTypes = {
  playlist: PropTypes.array.isRequired,
};

export default Header;
