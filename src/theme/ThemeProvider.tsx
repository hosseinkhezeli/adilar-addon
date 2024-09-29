'use client';
import customTheme from '@/theme/theme';
import { ReactNode, useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { NextCacheProvider } from 'ideep-design-system-2';

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const isRtl = true;
  const themeMode = 'light';
  const theme = useMemo(
    () => customTheme(themeMode, isRtl),
    [isRtl, themeMode]
  );

  return (
    <NextCacheProvider isRtl={isRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextCacheProvider>
  );
}
