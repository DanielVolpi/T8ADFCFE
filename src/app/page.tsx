import React from 'react';

const Header = React.lazy(() => import('@/components/Header'));
const EventDetails = React.lazy(() => import('@/components/EventDetails'));
const Footer = React.lazy(() => import('@/components/Footer'));
const RegistrationSection = React.lazy(
  () => import('@/components/RegistrationSection')
);
const Body = React.lazy(() => import('@/components/Body'));
const MainContainer = React.lazy(() => import('@/components/MainContainer'));

export default function Home() {
  return (
    <main>
      <Header />
      <MainContainer>
        <Body>
          <EventDetails />
          <RegistrationSection />
        </Body>
        <Footer />
      </MainContainer>
    </main>
  );
}
