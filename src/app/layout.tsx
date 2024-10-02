import React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';
import { ProviderLayout } from '@/app/components/ProviderLayout';
import { MainLayout } from '@/app/components/MainLayout';

const iranSans = localFont({
  src: [
    {
      path: './fonts/IranSans/iran-sans-mobile-fa-num-light.ttf',
      weight: '300',
    },
    {
      path: './fonts/IranSans/iran-sans-mobile-fa-num.ttf',
      weight: '400',
    },
    {
      path: './fonts/IranSans/iran-sans-mobile-fa-num-medium.ttf',
      weight: '500',
    },
    {
      path: './fonts/IranSans/iran-sans-mobile-fa-num-bold.ttf',
      weight: '700',
    },
    {
      path: './fonts/IranSans/iran-sans-mobile-fa-num-black.ttf',
      weight: '900',
    },
  ],
  display: 'fallback',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={iranSans.className} style={{ minHeight: '100vh' }}>
        <ProviderLayout>
          {/*<MainLayout>*/}
          {children}
          {/*</MainLayout>*/}
        </ProviderLayout>
      </body>
    </html>
  );
}
