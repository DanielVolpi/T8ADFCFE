import React from 'react';

import getText from '@/services/getText';
import countriesMockData from '../mockData/countries';

const UserForm = React.lazy(() => import('@/components/UserForm'));

import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(countriesMockData),
  })
);

const validMockValues = {
  firstname: 'UserFirstName',
  lastname: 'UserLastName',
  email: 'user@mail.com',
  country: 'UserCountry',
  phoneNumber: '+54 9 11 1234-5678',
  position: 'UserPosition',
};

const invalidMockValues = {
  firstname: '',
  lastname: 'UserLastName',
  email: 'user@mail.com',
  country: 'UserCountry',
  phoneNumber: '+54 9 11 1234-5678',
  position: 'UserPosition',
};

const {
  formFirstNameField,
  formLastNameField,
  formMailField,
  formCountryField,
  formPhoneNumberField,
  formPositionField,
  formSubmitButton,
} = getText();

const mockOption = 'Argentina';

describe('UserForm', () => {
  it('User will be submitted if all required fields are populated', async () => {
    const mockModalTrigger = jest.fn();
    const onSubmitMocked = jest.fn((e) => e.preventDefault());

    render(
      <React.Suspense fallback={'Loading...'}>
        <UserForm modalTrigger={mockModalTrigger} />
      </React.Suspense>
    );
    const firstNameInput = await screen.findByLabelText(formFirstNameField);
    fireEvent.change(firstNameInput, {
      target: { value: validMockValues.firstname },
    });

    const lastNameInput = await screen.findByLabelText(formLastNameField);
    fireEvent.change(lastNameInput, {
      target: { value: validMockValues.lastname },
    });

    const mailInput = await screen.findByLabelText(formMailField);
    fireEvent.change(mailInput, {
      target: { value: validMockValues.email },
    });

    const phoneNumberInput = await screen.findByLabelText(formPhoneNumberField);
    fireEvent.change(phoneNumberInput, {
      target: { value: validMockValues.phoneNumber },
    });

    const positionInput = await screen.findByLabelText(formPositionField);
    fireEvent.change(positionInput, {
      target: { value: validMockValues.position },
    });

    const countrySelect = await screen.findByLabelText(formCountryField);
    fireEvent.change(countrySelect, { target: { value: mockOption } });

    const form = await screen.findByTestId('user-form');
    form.onsubmit = onSubmitMocked;

    const submitButton = await screen.findByText(formSubmitButton);
    fireEvent.click(submitButton);
    expect(onSubmitMocked).toHaveBeenCalledTimes(1);
  });

  it('User will not be submitted if a required field is empty', async () => {
    const mockModalTrigger = jest.fn();
    const onSubmitMocked = jest.fn((e) => e.preventDefault());

    render(
      <React.Suspense fallback={'Loading...'}>
        <UserForm modalTrigger={mockModalTrigger} />
      </React.Suspense>
    );
    const firstNameInput = await screen.findByLabelText(formFirstNameField);
    fireEvent.change(firstNameInput, {
      target: { value: invalidMockValues.firstname },
    });

    const lastNameInput = await screen.findByLabelText(formLastNameField);
    fireEvent.change(lastNameInput, {
      target: { value: invalidMockValues.lastname },
    });

    const mailInput = await screen.findByLabelText(formMailField);
    fireEvent.change(mailInput, {
      target: { value: invalidMockValues.email },
    });

    const phoneNumberInput = await screen.findByLabelText(formPhoneNumberField);
    fireEvent.change(phoneNumberInput, {
      target: { value: invalidMockValues.phoneNumber },
    });

    const positionInput = await screen.findByLabelText(formPositionField);
    fireEvent.change(positionInput, {
      target: { value: invalidMockValues.position },
    });

    const countrySelect = await screen.findByLabelText(formCountryField);
    fireEvent.change(countrySelect, { target: { value: mockOption } });

    const form = await screen.findByTestId('user-form');
    form.onsubmit = onSubmitMocked;

    const submitButton = await screen.findByText(formSubmitButton);
    fireEvent.click(submitButton);
    expect(onSubmitMocked).toHaveBeenCalledTimes(0);
  });
});

async function populateFields(screen) {}

//expect(firstNameField).toBeInTheDocument();
//expect(positionField.value).toBe('pirulo');
//expect(countrySelect).toHaveValue('pirulo');
//expect(countrySelect).toHaveValue(mockOption);
