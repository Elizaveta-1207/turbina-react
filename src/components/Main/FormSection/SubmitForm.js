import React, { useState } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import FormButton from './FormButton';
import validate from '../../../utils/validation';

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
  ${(props) => props.checked && `
    background-color: #000;
    transition: 0.1s;
  `}
`;
const CheckboxLabelText = styled.span`
  margin-left: 20px;
`;
const FormInput = styled.input`
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

export default function SubmitForm({ onFormSubmit }) {
  const [values, setValues] = useState({
    email: null,
    tel: null,
    name: null,
    rhyme: '',
    ofert: false,
  });
  const errors = {};
  const [checked, setChecked] = useState(false);
  const [anyInputInvalid, setAnyInputInvalid] = useState();

  const checkFormValidity = () => {
    const any = Object
      .values(errors)
      .some((i) => i !== null);
    setAnyInputInvalid(any);
    console.log('any');
    console.log(any);
  };

  const handleInputChange = (e) => {
    const key = e.target.id;
    switch (key) {
      case 'ofert':
        setValues({ ...values, ofert: !checked });
        break;
      default:
        setValues({ ...values, [key]: e.target.value });
    }
    validate(values, errors);
    checkFormValidity();
    console.log('errors');
    console.log(errors);
    console.log('values');
    console.log(values);
  };
  const handleCheckboxClick = () => {
    setChecked(!checked);
  };

  return (
    <StyledForm action="#">
      <FormInput value={values.name} error={errors.name} onChange={handleInputChange} onBlur={handleInputChange} type="text" placeholder="Имя и фамилия автора" name="name" id="name" noValidate />
      <FormInput value={values.email} error={errors.email} onChange={handleInputChange} onBlur={handleInputChange} type="email" placeholder="Почта" name="email" id="email" noValidate />
      <FormInput value={values.tel} error={errors.tel} onChange={handleInputChange} onBlur={handleInputChange} type="tel" placeholder="Телефон" name="tel" id="tel" noValidate />
      <FormInput value={values.rhyme} error={errors.rhyme} onChange={handleInputChange} onBlur={handleInputChange} type="textarea" placeholder="Стихи" rows="10" name="rhyme" id="rhyme" noValidate />
      <label htmlFor="ofert">
        <FormInput checked={checked} error={errors.ofert} onChange={handleInputChange} onBlur={handleInputChange} type="checkbox" name="ofert" id="ofert" />
        <CheckboxLabel
        onClick={handleCheckboxClick} checked={checked}/>
        <CheckboxLabelText>
          Согласен с{' '}
          <OfertLink href="#">офертой</OfertLink>
        </CheckboxLabelText>
      </label>
      <FormButton
        text="Отправить"
        onClick={onFormSubmit}
        disabled={anyInputInvalid}
      />
    </StyledForm>
  );
}
SubmitForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
