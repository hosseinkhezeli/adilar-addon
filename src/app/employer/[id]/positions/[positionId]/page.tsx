import React from 'react';
import { ApplicantList } from './components/ApplicantList';
import { Stack } from '@mui/material';

type TPositionPageParams = {
  params: { id: string; positionId: string };
};

const Page = ({ params }: TPositionPageParams) => {
  return (
    <Stack height="100%" overflow="auto">
      <ApplicantList />
    </Stack>
  );
};

export default Page;
