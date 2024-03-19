'use client';

import React from 'react';
import StyledFormInputField from './style';
import IFormInputField from '@/interfaces/IFormInputField';

function FormInputField({
  type,
  label,
  name,
  value,
  required,
  onChangeCallback,
}: IFormInputField) {
  return (
    <label>
      {label}:
      <StyledFormInputField
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChangeCallback}
      />
    </label>
  );
}

export default FormInputField;
