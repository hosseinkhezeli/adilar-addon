import React from 'react';
import { PositionList } from '@/app/employer/positions/components/PositionList';
import { Stack } from '@mui/material';

const Page = () => {
  return (
    <Stack height="100%" overflow="auto">
      <PositionList />
    </Stack>
  );
};

export default Page;
