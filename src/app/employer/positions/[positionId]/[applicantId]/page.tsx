import React from 'react';
import { Stack } from '@mui/material';
import { Applicant } from '@/app/employer/positions/[positionId]/[applicantId]/components/Applicant';

const Page = () => {
  return (
    <Stack height="100%" overflow="auto">
      <Applicant />
    </Stack>
  );
};

export default Page;
