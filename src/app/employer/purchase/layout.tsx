import React from 'react';
import type { Metadata } from 'next';
import { PurchaseProgress } from './components/PurchaseProgress';

export const metadata: Metadata = {
  title: 'Adilar addon',
  description: "Purchasing flow of adilar's addon ",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { id: string };
}>) {
  return (
    <>
      <PurchaseProgress />
      {children}
    </>
  );
}
