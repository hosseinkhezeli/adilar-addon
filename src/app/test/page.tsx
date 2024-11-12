import React from 'react';
import { AdilarDatePicker } from '../components/AdilarDatePicker';
import { Stack } from '@mui/material';

const Page = () => {
  return (
    <Stack sx={{ height: '100vh' }}>
      <AdilarDatePicker />
    </Stack>
  );
};

export default Page;
