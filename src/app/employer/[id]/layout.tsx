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
  const navigationOptions: NavigationOption[] = [
    {
      label: 'فرم ساز',
      icon: <SvgDocument primarycolor={'inherit'} />,
      location: `/employer/${params?.id}/form-creator`,
    },
    {
      label: 'موقعیت های شغلی',
      icon: <SvgBriefcase primarycolor={'inherit'} />,
      location: `/employer/${params?.id}/positions`,
    },
  ];
  return (
    <MainLayout
      navigationOptions={navigationOptions}
      // searchSection={<SearchInput />}
    >
      {children}
    </MainLayout>
  );
}
