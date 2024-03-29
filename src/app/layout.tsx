import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './fonts.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The 8 Agency',
  description: 'Challenge DEV Front',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  );
}
