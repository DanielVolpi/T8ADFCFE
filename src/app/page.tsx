import React from 'react';

const UserForm = React.lazy(() => import('@/components/UserForm'));
const Header = React.lazy(() => import('@/components/Header'));
const EventDetails = React.lazy(() => import('@/components/EventDetails'));
const Footer = React.lazy(() => import('@/components/Footer'));

export default function Home() {
  return (
    <main>
      <Header />
      <EventDetails />
      <UserForm />
      <Footer />
    </main>
  );
}
