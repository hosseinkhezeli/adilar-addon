//@3rd Party
import React from 'react';
//_______________________________________________________________

//@Components
import { MainLayout } from '@/app/components/MainLayout';
//_______________________________________________________________

//@Types
import type { Metadata } from 'next';
import { Authentication } from '@/app/components/Authentication';
//_______________________________________________________________

export const metadata: Metadata = {
  title: 'Adilar addon',
  description: "Candidate panel of adilar's addon ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout withoutNavigation>
      <Authentication />
      {children}
    </MainLayout>
  );
}
