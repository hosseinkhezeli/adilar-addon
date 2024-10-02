'use client';
import React, { useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Stack,
} from '@mui/material';
import SvgBriefcase from 'ideep-design-system-2/icons/Briefcase';
import SvgDocumentText from 'ideep-design-system-2/icons/DocumentText';
import SvgDocumentText1 from 'ideep-design-system-2/icons/DocumentText1';

interface Props {
  children: React.ReactNode;
}
export function MainLayout({ children }: Props) {
  const [value, setValue] = useState(0);
  return (
    <Stack
      component={'main'}
      sx={{ minHeight: '100vh', fontFamily: 'inherit' }}
    >
      {children}
      <Box sx={{ width: '100%', height: 'max-content' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="رزومه ساز"
            icon={<SvgDocumentText primarycolor={'inherit'} />}
          />
          <BottomNavigationAction
            label="موقعیت های شغلی"
            icon={<SvgBriefcase primarycolor={'inherit'} />}
          />
          <BottomNavigationAction
            label="درخواست های من"
            icon={<SvgDocumentText1 primarycolor={'inherit'} />}
          />
        </BottomNavigation>
      </Box>
    </Stack>
  );
}