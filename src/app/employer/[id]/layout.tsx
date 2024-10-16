import React from 'react';
import type { Metadata } from 'next';
import { MainLayout } from '@/app/components/MainLayout';
import { AuthLayout } from './components/AuthLayout';

export const metadata: Metadata = {
  title: 'Adilar addon',
  description: "Employer panel of adilar's addon ",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { id: string };
}>) {
  return (
    <MainLayout withoutNavigation>
      <AuthLayout>{children}</AuthLayout>
    </MainLayout>
  );
}
