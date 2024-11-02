'use client';
//@3rd Party
import React from 'react';
//_______________________________________________________________

//@Mui
import { Stack, styled } from '@mui/material';
//_______________________________________________________________

//@Hooks & Components
import { useComplete } from '../../hooks/useComplete';
import { SuccessState, UnSuccessState } from './PurchaseState';
//_______________________________________________________________

export function Completed() {
  const {
    onClickSuccess,
    onClickReturn,
    onClickExit,
    trackingCode,
    isSuccess,
    isNavigating,
  } = useComplete();

  return (
    <Container>
      {isSuccess === 'success' ? (
        <SuccessState
          onClick={onClickSuccess}
          trackingCode={trackingCode}
          isLoading={isNavigating}
        />
      ) : (
        <UnSuccessState
          onClickExit={onClickExit}
          onClickReturn={onClickReturn}
          trackingCode={trackingCode}
          isLoading={isNavigating}
        />
      )}
    </Container>
  );
}
const Container = styled(Stack)(() => ({
  width: '100%',
  height: 'calc(100vh - 152px)',
  gap: 16,
  justifyContent: 'center',
}));
