'use client';

import React from 'react';

import IFormSelectField from '@/interfaces/IFormSelectField';

const StyledFormSelectField = React.lazy(() => import('./style'));

function FormSelectField({
  label,
  name,
  options,
  value,
  onChangeCallback,
  required,
}: IFormSelectField) {
  return (
    <label>
      {label}:
      <StyledFormSelectField
        name={name}
        value={value}
        onChange={onChangeCallback}
        required={required}
      >
        <option value='' disabled></option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledFormSelectField>
    </label>
  );
}

export default FormSelectField;
