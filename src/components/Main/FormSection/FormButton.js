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

  &:hover {
    background-color: #d18aad6e;
    border: 2px solid #d18aad00;
  }

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
`;

export default function FormButton({ onClick, text }) {
  return (
      <StyledFormButton
      className="form__btn"
      onClick = {onClick}>
        {text}
      </StyledFormButton>
  );
}
FormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};
