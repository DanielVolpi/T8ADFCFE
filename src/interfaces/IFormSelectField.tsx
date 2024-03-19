interface IFormSelectField {
  label: string;
  name: string;
  value: any;
  required: boolean;
  options: string[];
  onChangeCallback: () => {};
}

export default IFormSelectField;
