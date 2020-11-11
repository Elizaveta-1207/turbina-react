/* eslint-disable no-param-reassign */
const regExpEmail = /([a-zA-Z0-9]([-_.]?[a-zA-Z0-9]+)*)@([a-zA-Z0-9]([-]?[a-zA-Z0-9]+)*)(\.([a-zA-Z])+)+/i;
const regExpTel = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;

export default (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Обязательное поле';
  } else if (regExpEmail.test(values.email)) {
    errors.email = false;
  } else {
    errors.email = 'Введите корректный Email адрес';
  }
  if (!values.name) {
    errors.name = 'Обязательное поле';
  } else if (values.name.length >= 2) {
    errors.name = false;
  } else {
    errors.name = 'Введите корректное имя (больше 2 символов)';
  }
  if (!values.tel) {
    errors.tel = 'Обязательное поле';
  } else if (regExpTel.test(values.tel)) {
    errors.tel = false;
  } else {
    errors.tel = 'Введите полный номер телефона без пробелов';
  }
  if (!values.rhyme) {
    errors.rhyme = 'Обязательное поле';
  } else if (values.rhyme.length > 10) {
    errors.rhyme = false;
  } else {
    errors.rhyme = 'Длина текста не менее 10 символов';
  }
  if (values.ofert) {
    errors.ofert = false;
  } else {
    errors.ofert = 'Согласитесь с условиями оферты';
  }
  return errors;
};
