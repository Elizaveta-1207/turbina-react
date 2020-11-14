import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import CloseButton from './CloseBtn';

const Styledbutton = styled.button`
  display: block;
  box-sizing: border-box;
  outline: none;
  border: 2px solid;
  border-color: inherit;
  border-radius: 30px;
  margin-bottom: 10px;
  color: inherit;
  height: 32px;
  line-height: 1.2;
  background: none;
  width: ${(props) => (props.linksVisible && '32px')};
  font-size: ${(props) => !props.linksVisible && '12px'};
  padding: ${(props) => !props.linksVisible && '7px auto'};

  &::before {
    color: inherit;
  }
  &:hover {
    font-style: ${(props) => !props.linksVisible && 'italic'};
  }
`;

const LinksLayoutButton = ({ color, onClick, linksVisible }) => (
  linksVisible
    ? <CloseButton onClick={onClick} fill={color}/>
    : <Styledbutton onClick={onClick}>Стриминги</Styledbutton>
);

LinksLayoutButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  linksVisible: PropTypes.bool,
  color: PropTypes.string,
};

export default LinksLayoutButton;
