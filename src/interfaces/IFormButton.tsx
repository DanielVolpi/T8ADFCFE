import { ReactNode } from 'react';

interface IFormButton {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
}

export default IFormButton;
