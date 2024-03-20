'use client';

import React from 'react';

import IFormInputField from '@/interfaces/IFormInputField';

const StyledFormInputField = React.lazy(() => import('./style'));

const Label = React.lazy(() => import('@/components/Label'));

function FormInputField({
  type,
  label,
  name,
  value,
  required,
  onChangeCallback,
}: IFormInputField) {
  return (
    <Label text={`${label}`}>
      <StyledFormInputField
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChangeCallback}
      />
    </Label>
  );
}

export default FormInputField;
