import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adilar addon',
  description: "Adilar's addon employers panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
