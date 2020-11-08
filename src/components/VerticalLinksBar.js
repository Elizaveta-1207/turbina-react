import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import NavBarLink from './NavBarLink';
import LinksContainer from './LinksContainer';
import LinksContainerItem from './LinksContainerItem';
import LinksLayoutButton from './LinksLayoutButton';

const StyledLinksBar = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  align-items: flex-end;
  color: ${(props) => props.color};
`;

export default function VerticalLinksBar({ color }) {
  const [linksVisible, setLinksVisible] = React.useState(true);
  const [isMobileLayout, setIsMobileLayout] = React.useState(false);

  const setLinksLayout = () => {
    if (window.screen.width > 425) {
      setIsMobileLayout(false);
      setLinksVisible(true);
    } else {
      setIsMobileLayout(true);
      setLinksVisible(false);
    }
  };
  React.useEffect(() => {
    setLinksLayout();
  }, []);

  window.addEventListener('resize', () => {
    setLinksLayout();
    window.removeEventListener('onresize', () => {});
  });

  const handleLinksLayoutButtonClick = () => {
    setLinksVisible(!linksVisible);
  };
  return (
    <StyledLinksBar color={color}>
      {isMobileLayout
        && <LinksLayoutButton
            onClick={handleLinksLayoutButtonClick}
            linksVisible={linksVisible} />
      }
      <LinksContainer linksVisible={linksVisible}>
        <LinksContainerItem><NavBarLink link="#" title="Яндекс.Музыка ↗" /></LinksContainerItem>
        <LinksContainerItem><NavBarLink link="#" title="Spotify ↗" /></LinksContainerItem>
        <LinksContainerItem><NavBarLink link="#" title="Apple Music ↗" /></LinksContainerItem>
        <LinksContainerItem><NavBarLink link="#" title="VK Music ↗" /></LinksContainerItem>
      </LinksContainer>
    </StyledLinksBar>
  );
}
VerticalLinksBar.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
};
