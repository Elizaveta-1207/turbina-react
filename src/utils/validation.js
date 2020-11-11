/* eslint-disable no-param-reassign */
const regExpEmail = /([a-zA-Z0-9]([-_.]?[a-zA-Z0-9]+)*)@([a-zA-Z0-9]([-]?[a-zA-Z0-9]+)*)(\.([a-zA-Z])+)+/i;
const regExpTel = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;

export default (values, errors) => {
  if (!values.email) {
    errors.email = 'Обязательное поле';
  } else if (regExpEmail.test(values.email)) {
    errors.email = null;
  } else {
    errors.email = 'Введите корректный Email адрес';
  }
  if (!values.name) {
    errors.name = 'Обязательное поле';
  } else if (values.name.length > 2) {
    errors.name = null;
  } else {
    errors.name = 'Введите корректное имя (больше 2 символов)';
  }
  if (!values.tel) {
    errors.tel = 'Обязательное поле';
  } else if (regExpTel.test(values.tel)) {
    errors.tel = null;
  } else {
    errors.tel = 'Введите полный номер телефона';
  }
  if (!values.rhyme) {
    errors.rhyme = 'Обязательное поле';
  } else if (values.rhyme.length > 10) {
    errors.rhyme = null;
  } else {
    errors.rhyme = 'Длина текста не менее 10 символов';
  }
  if (values.ofert) {
    errors.ofert = null;
  } else {
    errors.ofert = 'Согласитесь с условиями оферты';
  }
};
