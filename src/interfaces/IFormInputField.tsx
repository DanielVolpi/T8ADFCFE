interface IFormInputField {
  type: string;
  label: string;
  name: string;
  value: any;
  required: boolean;
  onChangeCallback: () => {};
}

export default IFormInputField;
