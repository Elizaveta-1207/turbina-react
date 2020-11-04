import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

export default function SubmitForm({ onFormSubmit }) {
  // onFormSubmit
  console.log(onFormSubmit);
  return (
    <form action="#" className="form__wrapper">
      <FormInput
        type="text"
        placeholder="Имя и фамилия автора"
        name="name"
        id="name"
      />
      <FormInput type="email" placeholder="Почта" name="email" id="email" />
      <FormInput type="tel" placeholder="Телефон" name="tel" id="tel" />
      <FormInput
        type="textarea"
        placeholder="Стихи"
        rows="10"
        name="rhyme"
        id="rhyme"
      />
      <label htmlFor="ofert">
        <FormInput type="checkbox" name="ofert" id="ofert"></FormInput>
        <span className="form__input_visible-checkbox"></span>
        <span className="form__input_label-text">
          Согласен с{' '}
          <a href="#" className="form__ofert">
            офертой
          </a>
        </span>
      </label>
      <button className="form__btn">Отправить</button>
    </form>
  );
}
SubmitForm.propTypes = {
  onFormSubmit: PropTypes.string.isRequired,
};
