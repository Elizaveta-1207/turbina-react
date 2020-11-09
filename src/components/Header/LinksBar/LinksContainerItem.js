import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const LiItem = styled.a`
  color: inherit;
  list-style-type: none;
  margin: 10px 0 0;
  padding: 0;

  &:first-of-type {
    margin-top: 0;
  }
`;

const LinksContainerItem = ({ children }) => (
    <LiItem>
      {children}
    </LiItem>
);
LinksContainerItem.propTypes = {
  children: PropTypes.array,
};

export default LinksContainerItem;
