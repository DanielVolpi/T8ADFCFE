import { ChangeEvent } from 'react';

interface IFormInputField {
  type: string;
  label: string;
  name: string;
  value: any;
  required: boolean;
  onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default IFormInputField;
