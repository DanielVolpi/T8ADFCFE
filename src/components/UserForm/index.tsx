'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';

import IUserForm from '@/interfaces/IUserForm';
import submitUser from '@/services/submitUser';

import getText from '@/services/getText';
import storeInLocalStorage from '@/services/storeInLocalStorage';
import getCountries from '@/services/getCountries';

const FormInputField = React.lazy(() => import('@/components/FormInputField'));
const FormSelectField = React.lazy(
  () => import('@/components/FormSelectField')
);

function UserForm() {
  const {
    formTitle,
    formFirstNameField,
    formLastNameField,
    formMailField,
    formCountryField,
    formPhoneNumberField,
    formPositionField,
    formSubmitButton,
  } = getText();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setCountries(await getCountries());
    };

    fetchCountries();
  }, []);

  const userFormDataDefault: IUserForm = {
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    phoneNumber: '',
    position: '',
  };

  const [formData, setFormData] = useState(userFormDataDefault);

  const [error, setError] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(false);
  };

  const onSubmitHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { id } = await submitUser(formData);
    if (id) {
      storeInLocalStorage(id, formData);
      resetForm();
    } else {
      setError(true);
    }
  };

  const resetForm = () => {
    setFormData(userFormDataDefault);
  };

  return (
    <>
      <div>{formTitle}</div>
      <form onSubmit={onSubmitHandler}>
        <FormInputField
          type={'text'}
          label={formFirstNameField}
          name={'firstname'}
          value={formData.firstname}
          required
          onChangeCallback={onChangeHandler}
        />
        <FormInputField
          type={'text'}
          name={'lastname'}
          label={formLastNameField}
          value={formData.lastname}
          required
          onChangeCallback={onChangeHandler}
        />
        <FormInputField
          type={'email'}
          name={'email'}
          label={formMailField}
          value={formData.email}
          required
          onChangeCallback={onChangeHandler}
        />
        <FormSelectField
          label={formCountryField}
          name={'country'}
          value={formData.country}
          options={countries}
          required
          onChangeCallback={onChangeHandler}
        />
        <FormInputField
          type={'tel'}
          name={'phoneNumber'}
          label={formPhoneNumberField}
          value={formData.phoneNumber}
          required
          onChangeCallback={onChangeHandler}
        />
        <FormInputField
          type={'text'}
          label={formPositionField}
          name={'position'}
          value={formData.position}
          required
          onChangeCallback={onChangeHandler}
        />
        <button type='submit'>{formSubmitButton}</button>
      </form>
    </>
  );
}

export default UserForm;
