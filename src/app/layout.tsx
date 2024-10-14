import React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';
import { ProviderLayout } from '@/app/components/ProviderLayout';

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
  title: 'Adilar addon',
  description: "Adilar's addon for employer and candidate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={iranSans.className}
        style={{
          maxHeight: '100vh',
          height: '100%',
          maxWidth: 560,
          margin: '0 auto',
        }}
      >
        <ProviderLayout>{children}</ProviderLayout>
      </body>
    </html>
  );
}
