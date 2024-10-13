'use client';
//@3rd Party
import React, { ReactNode, useLayoutEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Route } from 'next';
//____________________________________________________

//@MUI
import { Button, Link, Stack, Typography } from '@mui/material';
//____________________________________________________

//@Components
import { PurchaseProgress } from './PurchaseProgress';

export function PurchaseLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentState = searchParams.get('state');
  const { push: navigateTo } = useRouter();
  const newState =
    currentState === 'plans'
      ? 'information'
      : currentState === 'information'
        ? 'payment'
        : currentState === 'payment'
          ? 'bank-portal'
          : 'plans';

  const newSearchParams = new URLSearchParams({ state: newState });
  useLayoutEffect(() => {
    if (!currentState) {
      navigateTo(`${pathname}?${newSearchParams.toString()}` as Route);
    }
  }, []);

  return (
    <Stack sx={styles.container}>
      <Typography variant="body3.medium">
        فرم‌ساز رزومه و دسته‌بندی رزومه‌ها
      </Typography>
      <PurchaseProgress />
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
