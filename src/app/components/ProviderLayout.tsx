'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { CssBaseline, useTheme } from '@mui/material';
import ThemeRegistry from '@/theme/ThemeProvider';

interface Props {
  children: React.ReactNode;
}

const client = new QueryClient();

export function ProviderLayout({ children }: Props) {
  const theme = useTheme();
  return (
    <QueryClientProvider client={client}>
      <ThemeRegistry>
        <CssBaseline />
        {children}
        <ProgressBar
          height="4px"
          color={theme.palette.warning.main}
          options={{ showSpinner: true }}
          shallowRouting
        />
      </ThemeRegistry>
    </QueryClientProvider>
  );
}
