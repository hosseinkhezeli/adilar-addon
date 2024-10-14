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
  const { currentState, newSearchParams, pathname } = usePurchaseLayout();
  return (
    <Stack sx={styles.container}>
      <Typography variant="body3.medium">
        فرم‌ساز رزومه و دسته‌بندی رزومه‌ها
      </Typography>
      <PurchaseProgress activeState={currentState} />
      {children}

      <Link
        href={`${pathname}?${newSearchParams.toString()}`}
        sx={{ position: 'absolute', width: '90%', margin: '0 auto', bottom: 4 }}
      >
        <Button fullWidth variant="contained">
          ادامه
        </Button>
      </Link>
    </Stack>
  );
}

const styles = {
  container: {
    gap: 8,
    height: 'calc(100vh - 80px)',
    position: 'relative',
    alignItems: 'center',
    padding: 4,
  },
};
