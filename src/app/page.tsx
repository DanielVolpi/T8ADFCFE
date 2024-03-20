import React from 'react';

const UserForm = React.lazy(() => import('@/components/UserForm'));
const Header = React.lazy(() => import('@/components/Header'));
const Side = React.lazy(() => import('@/components/Side'));
const Footer = React.lazy(() => import('@/components/Footer'));

export default function Home() {
  return (
    <main>
      <Header />
      <Side />
      <UserForm />
      <Footer />
    </main>
  );
}
