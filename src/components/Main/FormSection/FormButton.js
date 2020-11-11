import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import RoundedButton from '../../CommonUtils/Templates/RoundedButton';

const StyledFormButton = styled(RoundedButton)`
  border-color: #000
  background-color: transparent;
  box-sizing: border-box;
  margin-top: 40px;
  font-size: 18px;
  line-height: 1.2;
  padding: 19px 24px;
  transition: background-color 0.3s ease-in-out;

  @media screen and (max-width: 1023px) {
    margin-top: 70px;
    font-size: 16px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 60px;
    font-size: 14px;
    padding: 15px 22px;
  }
  @media screen and (max-width: 424px) {
    margin-top: 50px;
    font-size: 12px;
    padding: 10px 20px;
  }
  ${(props) => (props.disabled === 'true'
    ? `
  cursor: default;
  opacity: .4;
  `
    : `
  &:hover {
    font-style: italic;
  }
  `)}
`;

export default function FormButton({ disabled = true, text }) {
  return (
      <StyledFormButton as="button"
      className="form__btn"
      disabled={disabled ? 'true' : ''}>
        {text}
      </StyledFormButton>
  );
}
FormButton.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
};
