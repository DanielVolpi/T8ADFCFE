'use client';

import React from 'react';

import IFormSelectField from '@/interfaces/IFormSelectField';

const StyledFormSelectField = React.lazy(() => import('./style'));

const Label = React.lazy(() => import('@/components/Label'));

function FormSelectField({
  label,
  name,
  options,
  value,
  onChangeCallback,
  required,
}: IFormSelectField) {
  return (
    <Label text={`${label}`}>
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
    </Label>
  );
}

export default FormSelectField;
