'use client';
import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Route } from 'next';

export interface NavigationOption {
  label: string;
  icon: React.ReactElement;
  onClick?: () => void;
  location?: string;
}

interface Props {
  children: React.ReactNode;
  navigationOptions?: NavigationOption[];
  searchSection?: React.ReactNode;
}

export function MainLayout({
  children,
  navigationOptions,
  searchSection,
}: Props) {
  const [value, setValue] = useState(0);
  const { push: navigateTo } = useRouter();
  const STACK_HEIGHT = getStackHeight(searchSection, navigationOptions);
  return (
    <>
      {searchSection}

      <Stack
        component={'main'}
        sx={{ overflow: 'auto', height: `calc(100vh - ${STACK_HEIGHT}px)` }}
      >
        {children}
      </Stack>
      {navigationOptions?.length && navigationOptions?.length > 0 && (
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
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
      )}
    </>
  );
}

const getStackHeight = (
  handleSearch: Props['searchSection'],
  navigationOptions: Props['navigationOptions']
) => {
  if (handleSearch && navigationOptions) return 136;
  if (navigationOptions) return 75;
  if (handleSearch) return 61;
  return 0;
};
