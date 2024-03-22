interface IFormSelectField {
  label: string;
  name: string;
  value: any;
  required: boolean;
  options: string[];
  onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default IFormSelectField;
