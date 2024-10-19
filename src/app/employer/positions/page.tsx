import React from 'react';
import { PositionList } from '@/app/employer/positions/components/PositionList';
import { Stack } from '@mui/material';

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <Stack height="100%" overflow="auto">
      <PositionList id={params.id} />
    </Stack>
  );
};

export default Page;
