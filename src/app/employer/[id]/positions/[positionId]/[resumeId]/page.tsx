import React from 'react';
import { Stack } from '@mui/material';
import { Resume } from '@/app/employer/[id]/positions/[positionId]/[resumeId]/components/Resume';

interface IPage {
  params: {
    id: string;
    positionId: string;
    reportId: string;
  };
}
const Page = ({ params }: IPage) => {
  return (
    <Stack height="100%" overflow="auto">
      <Resume />
    </Stack>
  );
};

export default Page;
