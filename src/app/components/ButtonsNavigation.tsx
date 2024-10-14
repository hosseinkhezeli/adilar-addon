'use client';
import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Route } from 'next';
import { useParams, usePathname, useRouter } from 'next/navigation';
import SvgDocument from 'ideep-design-system-2/icons/Document';
import SvgBriefcase from 'ideep-design-system-2/icons/Briefcase';
import { NavigationOption } from '@/app/components/MainLayout';

const ButtonsNavigation = () => {
  const pathName = usePathname();
  const [value, setValue] = useState(pathName.includes('/positions') ? 1 : 0);
  const params = useParams();
  const { push: navigateTo } = useRouter();
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
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        position: 'fixed',
        bottom: 0,
        zIndex: 9,
      }}
    >
      {navigationOptions?.map((option, index) => (
        <BottomNavigationAction
          key={option.label + index}
          label={option.label}
          icon={option.icon}
          onClick={() => {
            if (option?.onClick) {
              option?.onClick();
            }
            if (option?.location) {
              navigateTo(option?.location as Route);
            }
            setValue(index);
          }}
        />
      ))}
    </BottomNavigation>
  );
};

export { ButtonsNavigation };
