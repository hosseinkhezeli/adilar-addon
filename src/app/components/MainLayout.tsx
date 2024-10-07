'use client';
import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Stack } from '@mui/material';
import { SearchInput } from '@/app/components/SearchInput';

interface NavigationOption {
  label: string;
  icon: React.ReactElement;
  onClick: () => void;
}

interface Props {
  children: React.ReactNode;
  navigationOptions?: NavigationOption[];
  handleSearch?: (term: string) => void;
}

export function MainLayout({
  children,
  navigationOptions,
  handleSearch,
}: Props) {
  const [value, setValue] = useState(0);
  return (
    <>
      {handleSearch && <SearchInput onSearch={handleSearch} />}
      <Stack
        component={'main'}
        sx={{ overflow: 'auto', height: 'calc(100vh - 120px)' }}
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
                option.onClick();
                setValue(index);
              }}
            />
          ))}
        </BottomNavigation>
      )}
    </>
  );
}
