//@3rd Party
import React from 'react';
//_______________________________________________________________

//@Components
import { MainLayout } from '../components/MainLayout';
import { AuthLayout } from '../components/AuthLayout';
//_______________________________________________________________

//@Types
import type { Metadata } from 'next';
//_______________________________________________________________

export const metadata: Metadata = {
  title: 'Adilar addon',
  description: "Adilar's addon employers panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout withoutNavigation>
      <AuthLayout>{children}</AuthLayout>
    </MainLayout>
  );
}
