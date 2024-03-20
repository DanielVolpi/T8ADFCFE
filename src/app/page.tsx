'use client';

import getText from '@/services/getText';
import React, { useState } from 'react';

const Header = React.lazy(() => import('@/components/Header'));
const EventDetails = React.lazy(() => import('@/components/EventDetails'));
const Footer = React.lazy(() => import('@/components/Footer'));
const RegistrationSection = React.lazy(
  () => import('@/components/RegistrationSection')
);
const Body = React.lazy(() => import('@/components/Body'));
const MainContainer = React.lazy(() => import('@/components/MainContainer'));
const Modal = React.lazy(() => import('@/components/Modal'));

export default function Home() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const { modalTitle, modalBody } = getText();

  return (
    <main>
      <Header />
      <MainContainer>
        <Body>
          <EventDetails />
          <RegistrationSection modalTrigger={toggleModal} />
        </Body>
        <Footer />
      </MainContainer>
      <Modal
        title={modalTitle}
        message={modalBody}
        trigger={toggleModal}
        isOpened={modal}
      />
    </main>
  );
}
