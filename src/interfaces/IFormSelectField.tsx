interface IFormSelectField {
  label: string;
  name: string;
  value: any;
  required: boolean;
  options: string[];
  onChangeCallback: (e: any) => void;
}

export default IFormSelectField;
