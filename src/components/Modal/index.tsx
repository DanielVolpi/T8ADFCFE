'use client';

import React, { useState } from 'react';

const StyledModal = React.lazy(() => import('./StyledModal'));
const StyledOverlay = React.lazy(() => import('./StyledOverlay'));
const StyledModalTitle = React.lazy(() => import('./StyledModalTitle'));
const StyledModalMessage = React.lazy(() => import('./StyledModalMessage'));
const StyledModalContent = React.lazy(() => import('./StyledModalContent'));
const StyledModalButton = React.lazy(() => import('./StyledModalButton'));

function Modal({
  title,
  message,
  trigger,
  isOpened,
}: {
  title: string;
  message: string;
  trigger: () => {};
  isOpened: boolean;
}) {
  return (
    isOpened && (
      <StyledModal>
        <StyledOverlay onClick={trigger}></StyledOverlay>
        <StyledModalContent>
          <StyledModalTitle>{title}</StyledModalTitle>
          <StyledModalMessage>{message}</StyledModalMessage>
          <StyledModalButton onClick={trigger}>⨉</StyledModalButton>
        </StyledModalContent>
      </StyledModal>
    )
  );
}

export default Modal;
