import React from 'react';
import type { Metadata } from 'next';
import { MainLayout } from '@/app/components/MainLayout';

export const metadata: Metadata = {
  title: 'Adilar addon',
  description: "Candidate panel of adilar's addon ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayout>{children}</MainLayout>;
}
