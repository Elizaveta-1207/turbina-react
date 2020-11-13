import React from 'react';
import PropTypes from 'prop-types';
import BlockTitle from '../../CommonUtils/TextUtils/BlockTitle';
import BlockSubtitle from '../../CommonUtils/TextUtils/BlockSubtitle';
import SubmitForm from './SubmitForm';

const FormSection = ({ onFormSubmit }) => (
    <section>
      <BlockTitle title="Форма." />
      <BlockSubtitle subtitle="Заполняя эту форму, вы становитесь частью проекта" />
      <SubmitForm onFormSubmit={onFormSubmit} />
    </section>
);
FormSection.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
export default FormSection;
