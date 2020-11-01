import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  type, placeholder, name, id, rows = '1',
}) {
  return (
    <input
      type={type}
      className="form__input"
      placeholder={placeholder}
      id={id}
      name={name}
      rows={rows} />
  );
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
};
