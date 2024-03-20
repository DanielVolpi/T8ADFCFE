import { HTMLAttributes } from 'react';

interface IStyledMainHeader extends HTMLAttributes<HTMLDivElement> {
  $secondary?: boolean;
}

export default IStyledMainHeader;
