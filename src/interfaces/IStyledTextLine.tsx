import { HTMLAttributes } from 'react';

interface IStyledTextLine extends HTMLAttributes<HTMLDivElement> {
  $main?: boolean;
}

export default IStyledTextLine;
