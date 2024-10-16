import React from 'react';
import type { Metadata } from 'next';
import { MainLayout, NavigationOption } from '@/app/components/MainLayout';
import SvgDocument from 'ideep-design-system-2/icons/Document';
import SvgBriefcase from 'ideep-design-system-2/icons/Briefcase';
import { SearchInput } from '@/app/components/SearchInput';

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
  return <MainLayout withoutNavigation>{children}</MainLayout>;
}
