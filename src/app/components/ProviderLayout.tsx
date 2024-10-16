'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { useTheme } from '@mui/material';
import ThemeProvider from '@/theme/ThemeProvider';
import { SnackbarProvider } from 'notistack';

interface Props {
  children: React.ReactNode;
}

const client = new QueryClient();

export function ProviderLayout({ children }: Props) {
  const theme = useTheme();
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <SnackbarProvider>
          {children}
          <ProgressBar
            height="4px"
            color={theme.palette.warning.main}
            options={{ showSpinner: true }}
            shallowRouting
          />
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
