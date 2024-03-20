'use client';

import React from 'react';

import IFormInputField from '@/interfaces/IFormInputField';

const StyledFormInputField = React.lazy(() => import('./style'));

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
