'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import FormInputField from '@/components/FormInputField';
import FormSelectField from '@/components/FormSelectField';
import getText from '@/services/getText';
import storeInLocalStorage from '@/services/storeInLocalStorage';
import getCountries from '@/services/getCountries';
import IUserForm from '@/interfaces/IUserForm';

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

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    storeInLocalStorage(1, formData);
    resetForm();
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