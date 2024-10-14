import React from 'react';
import { Stack } from '@mui/material';
import { ButtonsNavigation } from '@/app/components/ButtonsNavigation';

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

export function MainLayout({ children }: Props) {
  // const STACK_HEIGHT = getStackHeight(searchSection, navigationOptions);
  return (
    <>
      {/* {searchSection} */}

      <Stack
        component={'main'}
        sx={{ overflow: 'auto', height: `calc(100vh - 75px)` }}
      >
        {children}
      </Stack>

      <ButtonsNavigation />
    </>
  );
}

// const getStackHeight = (
//   handleSearch: Props['searchSection'],
//   navigationOptions: Props['navigationOptions']
// ) => {
//   if (handleSearch && navigationOptions) return 136;
//   if (navigationOptions) return 75;
//   if (handleSearch) return 61;
//   return 0;
// };
