import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import AppContext from '../../../contexts/AppContext';
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
  @media screen and (max-width: 767px) {
    ${(props) => props.isBlurred
      && `
      transition: filter 2s;
      filter: blur(5px);
      opacity: .5;`}
  }
`;

const VerticalLinksBar = ({ color, isBlurred }) => {
  const [linksVisible, setLinksVisible] = React.useState(true);
  const [isMobileLayout, setIsMobileLayout] = React.useState(false);
  const { links } = React.useContext(AppContext);

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
    <StyledLinksBar isBlurred={isBlurred} color={color}>
      {isMobileLayout
        && <LinksLayoutButton
            onClick={handleLinksLayoutButtonClick}
            linksVisible={linksVisible} />
      }
      <LinksContainer linksVisible={linksVisible}>
        {links.map(({ link, title, id }) => (
          <LinksContainerItem key={id}>
            <NavBarLink link={link} title={title} />
          </LinksContainerItem>))
        }
      </LinksContainer>
    </StyledLinksBar>
  );
};
VerticalLinksBar.propTypes = {
  color: PropTypes.string,
  isBlurred: PropTypes.bool,
};
VerticalLinksBar.defaultProps = {
  color: '#fff',
  isBlurred: false,
};

export default VerticalLinksBar;
