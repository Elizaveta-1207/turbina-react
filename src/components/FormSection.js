import React from 'react';
import PropTypes from 'prop-types';
import BlockTitle from './BlockTitle';
import SubmitForm from './SubmitForm';

export default function FormSection({ onFormSubmit }) {
  return (
    <section className="form">
      <BlockTitle title="Форма" />
      <SubmitForm onFormSubmit={onFormSubmit} />
    </section>
  );
}
FormSection.propTypes = {
  onFormSubmit: PropTypes.string.isRequired,
};
