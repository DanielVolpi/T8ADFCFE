import IUser from './IUser';

interface ITrashButton {
  entries: IUser[];
  deleteCallback: () => void;
}

export default ITrashButton;
