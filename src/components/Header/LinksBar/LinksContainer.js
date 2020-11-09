import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledLinksContainer = styled.ul`
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0;
  margin: 0;
  visibility: ${(props) => props.visibility};
  opacity: ${(props) => props.opacity};

  @media screen and (max-width: 424px) {
    transition: visibility .3s, opacity .3s linear;
  }
`;

const LinksContainer = ({ linksVisible, children }) => (
  <StyledLinksContainer
    visibility={linksVisible ? 'visible' : 'hidden'}
    opacity={linksVisible ? 1 : 0} >

    {children}

  </StyledLinksContainer>
);

LinksContainer.propTypes = {
  linksVisible: PropTypes.bool.isRequired,
  children: PropTypes.array,
};

export default LinksContainer;
