'use client';
//@3rd Party
import React, { ReactNode } from 'react';
//____________________________________________________

//@MUI
import { Stack, Typography } from '@mui/material';
//____________________________________________________

//@Components & Hooks
import { PurchaseProgress } from './PurchaseProgress';
import { usePurchaseLayout } from '../hooks/usePurchaseLayout';
//____________________________________________________

export function PurchaseLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { currentState } = usePurchaseLayout();
  return (
    <Stack sx={styles.container}>
      <Typography variant="body3.medium">
        افزونه مدیریت و دریافت رزومه آدیلار
      </Typography>
      {currentState !== 'completed' && (
        <PurchaseProgress activeState={currentState} />
      )}
      {children}
    </Stack>
  );
}

const styles = {
  container: {
    gap: 7,
    height: '100vh',
    position: 'relative',
    alignItems: 'center',
    padding: 4,
    maxWidth: 560,
    width: '100%',
    margin: '0 auto',
  },
};
