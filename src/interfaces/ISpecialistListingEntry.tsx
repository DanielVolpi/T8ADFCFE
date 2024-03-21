import ISpecialist from '@/interfaces/ISpecialist';

interface ISpecialistListingEntry {
  entries: ISpecialist[];
  deleteCallback: (id: string) => void;
}

export default ISpecialistListingEntry;
