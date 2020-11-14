import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import FormButton from './FormButton';
import validate from '../../../utils/validation';
import { laterResolve } from '../../../utils/promisesTimeouted';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 597px;
`;
const OfertLink = styled.a`
  color: #000;

  &:hover {
    font-style: italic;
  }
`;
const CheckboxLabel = styled.label`
  display: inline-block;
  vertical-align: middle;
  width: 27px;
  height: 27px;
  border: 2px solid #000;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
  ${(props) => props.checkedRender && `
    background-color: #000;
    transition: 0.1s;
  `}
`;
const CheckboxLabelText = styled.span`
  margin-left: 20px;
  font-family: Inter, Arial, sans-serif;
  font-weight: normal;
  font-size: 16px;
`;
const OfertWrap = styled.div`
margin-top: 20px;
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
  padding: 0 8px;
  font-family: Inter, Arial, sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.2;
  color: ${(props) => (props.error === false
    ? 'black'
    : 'red')};

  &::placeholder {
    color: #00000080;
    font-family: Inter, Arial, sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.2;
  }

  &:focus {
    outline: none;
  }

  &[type='checkbox'] {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  &:nth-last-child(4) {
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
const ErrorMessage = styled.div`
width: 100%;
height: fit-content;
font-family: Inter, Arial, sans-serif;
font-weight: 400;
font-size: 16px;
color: red;
margin-bottom: 12px`;
const InputWrapper = styled.div`
position: relative;
`;
const ErrorIndicator = styled.div`
position: absolute;
top: 20px;
left: -5px;
color: red;
&::before {
  content: '*';
}
`;
const ErrorSubmitMessage = styled(ErrorMessage)`
margin-top: 12px;
text-align: center;
margin-bottom: 0;`;

const SubmitForm = ({ onFormSubmit }) => {
  const [errors, setErrors] = useState({
    tel: '',
  });
  const [values, setValues] = useState({
    tel: '',
    name: '',
    email: '',
    rhyme: '',
  });
  const [checked, setChecked] = useState(false);
  const [anyInputInvalid, setAnyInputInvalid] = useState(true);
  const [showError, setShowError] = useState({});
  const [buttonText, setButtonText] = useState('Отправить форму');
  const [submitFailed, setSubmitFailed] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const checkFormValidity = () => {
    const any = Object
      .values(errors)
      .some((i) => i !== false);
    setAnyInputInvalid(any);
  };

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  useEffect(() => {
    checkFormValidity();
  }, [errors]);

  const handleInputChange = (e) => {
    const key = e.target.id;
    if (key === 'ofert') setChecked(!checked);
    const value = (key === 'ofert')
      ? e.target.checked
      : e.target.value;
    setValues({ ...values, [key]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(values)
      .then((res) => {
        setButtonText(res.successMessage);
        laterResolve(4000).then(() => {
          setButtonText('Отправить форму');
        });
      })
      .catch((err) => {
        console.log(err);
        setSubmitFailed(true);
        setSubmitError('Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!');
        laterResolve(3000).then(() => {
          setSubmitFailed(false);
          setSubmitError(null);
          setButtonText('Отправить форму');
        });
      });
  };

  return (
    <StyledForm onSubmit={(e) => handleFormSubmit(e)}>
    <InputWrapper>
      <FormInput
      error={errors.name}
      value={values.name}
      onChange={handleInputChange}
      onFocus={() => setShowError({ ...showError, name: true })}
      onBlur={() => setShowError({})}
      type="text"
      name="name"
      placeholder="Имя и фамилия автора"
      id="name"
      noValidate ></FormInput>
      {errors.name && <ErrorIndicator/>}
      {(errors.name && showError.name) && <ErrorMessage>{errors.name}</ErrorMessage>}
    </InputWrapper>

    <InputWrapper>
      <FormInput
      value={values.email}
      onChange={handleInputChange}
      onFocus={() => setShowError({ email: true })}
      onBlur={() => setShowError({})}
      type="email"
      placeholder="Почта"
      error={errors.email}
      name="email"
      id="email"
      noValidate />
      {errors.email && <ErrorIndicator/>}
      {(errors.email && showError.email) && <ErrorMessage>{errors.email}</ErrorMessage>}
    </InputWrapper>

    <InputWrapper>
      <FormInput
      value={values.tel}
      onChange={handleInputChange}
      onFocus={() => setShowError({ tel: true })}
      onBlur={() => setShowError({})}
      type="tel"
      error={errors.tel}
      name="tel"
      placeholder="Телефон"
      id="tel"
      noValidate />
      {errors.tel && <ErrorIndicator/>}
      {(errors.tel && showError.tel) && <ErrorMessage>{errors.tel}</ErrorMessage>}
    </InputWrapper>

    <InputWrapper>
      <FormInput
      value={values.rhyme}
      onChange={handleInputChange}
      onFocus={() => setShowError({ rhyme: true })}
      onBlur={() => setShowError({})}
      type="textarea"
      error={errors.rhyme}
      placeholder="Стихи"
      rows="10"
      name="rhyme"
      id="rhyme"
      noValidate />
      {errors.rhyme && <ErrorIndicator/>}
      {(errors.rhyme && showError.rhyme) && <ErrorMessage>{errors.rhyme}</ErrorMessage>}
    </InputWrapper>

      <OfertWrap>
        <CheckboxLabel htmlFor="ofert" checkedRender={checked}>
          <FormInput
          checked={checked}
          onChange={handleInputChange}
          onFocus={() => setShowError({ ofert: true })}
          onBlur={() => { setShowError({}); }}
          type="checkbox"
          name="ofert"
          id="ofert" />
        </CheckboxLabel>
        <CheckboxLabelText>
          Согласен с{' '}
{/*           // тут бы модалку сделать с офертой */}
          <OfertLink href="#" target="_blank">офертой</OfertLink>
        </CheckboxLabelText>
      </OfertWrap>
      <FormButton
        text={buttonText}
        disabled={anyInputInvalid} />
     {submitFailed && (<ErrorSubmitMessage>{submitError}</ErrorSubmitMessage>)}
    </StyledForm>
  );
};
SubmitForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default SubmitForm;
