//@3rd Party
import React from 'react';
import type { Metadata } from 'next';
//____________________________________________________

//@Components
import { PurchaseLayout } from './components/PurchaseLayout';
//____________________________________________________

export const metadata: Metadata = {
  title: 'Adilar addon',
  description: "Purchasing flow of adilar's addon ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PurchaseLayout>{children}</PurchaseLayout>
    </>
  );
}
