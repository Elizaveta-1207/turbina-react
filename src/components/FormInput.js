import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledInput = styled.input`
  box-sizing: border-box;
  border-radius: 2px;
  cursor: text;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid #000;
  padding: 0 4px;
  font-size: 16px;
  line-height: 1.2;
  color: #000;

  &::placeholder {
    color: #00000080;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.2;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #d18aad;
  }

  &[type='checkbox'] {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  &[type='checkbox']:checked + .form__input_visible-checkbox {
    background-color: #000;
    transition: 0.1s;
  }

  &:nth-last-child(3) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 6px;
    
    &::placeholder {
      font-size: 14px;
    }
  }
`;

export default function Input({ type, placeholder, name, id, rows = '1' }) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      rows={rows}
    />
  );
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.string,
};
