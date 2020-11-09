import React from 'react';
import PropTypes from 'prop-types';
import BlockTitle from '../../CommonUtils/TextUtils/BlockTitle';
import BlockSubtitle from '../../CommonUtils/TextUtils/BlockSubtitle';
import SubmitForm from './SubmitForm';

export default function FormSection({ onFormSubmit }) {
  return (
    <section>
      <BlockTitle title="Форма" />
      <BlockSubtitle subtitle="Заполняя эту форму, вы становитесь частью проекта" />
      <SubmitForm onFormSubmit={onFormSubmit} />
    </section>
  );
}
FormSection.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
