import React from 'react';
import { Stack } from '@mui/material';
import { ButtonsNavigation } from '@/app/components/ButtonsNavigation';

export interface NavigationOption {
  label: string;
  icon: React.ReactElement;
  onClick?: () => void;
  location?: string;
}

interface Props {
  children: React.ReactNode;
  withoutNavigation?: boolean;
}

export function MainLayout({ children, withoutNavigation = false }: Props) {
  return (
    <>
      <Stack
        component={'main'}
        sx={{
          overflow: 'auto',
          maxHeight: withoutNavigation ? '100vh' : `calc(100vh - 75px)`,
          height: withoutNavigation ? '100vh' : `calc(100vh - 75px)`,
        }}
      >
        {children}
      </Stack>
      {!withoutNavigation && <ButtonsNavigation />}
    </>
  );
}
