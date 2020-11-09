import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

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
  padding: ${(props) => !props.linksVisible && '7px 16px'};

  &::before {
    color: inherit;
    content: ${(props) => (props.linksVisible ? '\'\u2716\'' : '\'Стриминги\'')};
  }
  &:hover {
    font-style: ${(props) => !props.linksVisible && 'italic'};
  }
`;

const LinksLayoutButton = ({ onClick, linksVisible }) => (
    <Styledbutton
        onClick={onClick}
        linksVisible={linksVisible}>
    </Styledbutton>
);

LinksLayoutButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  linksVisible: PropTypes.bool,
};

export default LinksLayoutButton;
