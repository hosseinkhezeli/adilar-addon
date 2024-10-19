//@3rd Party
import React from 'react';
//_______________________________________________________________

//@Components
import { MainLayout } from '@/app/components/MainLayout';
import { AuthLayout } from '../employer/[id]/components/AuthLayout';
//_______________________________________________________________

//@Types
import type { Metadata } from 'next';
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
      <AuthLayout>{children}</AuthLayout>
    </MainLayout>
  );
}
