import React from 'react';
import PropTypes from 'prop-types';
import BlockTitle from './BlockTitle';

export default function SubmitForm({ onFormSubmit }) {
  // onFormSubmit
  console.log(onFormSubmit);
  return (
    <section className="form">
      <BlockTitle title="Форма" />

      <form action="#" className="form__wrapper">
        <input type="text" className="form__input" placeholder="Имя и фамилия автора" />
        <input type="email" className="form__input" placeholder="Почта" />
        <input type="tel" className="form__input" placeholder="Телефон" />
        <textarea type="textarea" className="form__input" placeholder="Стихи" rows="10"></textarea>
        <label htmlFor="ofert">
          <input type="checkbox" className="form__input" id="ofert" />Согласен с <a href="#" className="form__ofert">офертой</a>
        </label>
        <button className="form__btn">Отправить</button>
      </form>
    </section>
  );
}
SubmitForm.propTypes = {
  onFormSubmit: PropTypes.string.isRequired,
};
