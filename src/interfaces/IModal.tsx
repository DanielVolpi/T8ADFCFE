interface IModal {
  title: string;
  message: string;
  trigger: () => void;
  isOpened: boolean;
}

export default IModal;
