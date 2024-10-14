'use client';
//@3rd Party
import React, { ReactNode } from 'react';
//____________________________________________________

//@MUI
import { Button, Link, Stack, Typography } from '@mui/material';
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
        فرم‌ساز رزومه و دسته‌بندی رزومه‌ها
      </Typography>
      <PurchaseProgress activeState={currentState} />
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
  },
};
