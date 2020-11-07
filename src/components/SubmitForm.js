import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormButton from './FormButton';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 597px;
`;
const OfertLink = styled.a`
  color: #000;
`;
const CheckboxLabel = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 27px;
  height: 27px;
  border: 2px solid #000;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
`;
const CheckboxLabelText = styled.span`
  margin-left: 20px;
`;
// eslint-disable-next-line no-unused-vars
export default function SubmitForm({ onFormSubmit }) {
  return (
    <StyledForm action="#">
      <FormInput type="text" placeholder="Имя и фамилия автора" name="name" id="name" />
      <FormInput type="email" placeholder="Почта" name="email" id="email" />
      <FormInput type="tel" placeholder="Телефон" name="tel" id="tel" />
      <FormInput type="textarea" placeholder="Стихи" rows="10" name="rhyme" id="rhyme" />
      <label htmlFor="ofert">
        <FormInput type="checkbox" name="ofert" id="ofert"></FormInput>
        <CheckboxLabel />
        <CheckboxLabelText>
          Согласен с{' '}
          <OfertLink href="#">офертой</OfertLink>
        </CheckboxLabelText>
      </label>
      <FormButton
        text="Отправить"
        onClick={onFormSubmit}
      />
    </StyledForm>
  );
}
SubmitForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
