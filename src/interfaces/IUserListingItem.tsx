interface IUserListingItem {
  id: string;
  firstname: string;
  lastname: string;
  position: string;
  country: string;
  phoneNumber: string;
  email: string;
  deleteCallback: (id: string) => void;
}

export default IUserListingItem;
