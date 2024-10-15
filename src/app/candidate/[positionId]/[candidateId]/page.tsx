import React from 'react';
import { PositionForm } from './components/PositionForm';
import { FormHeader } from './components/FormHeader';
import { Stack } from '@mui/material';

type TProps = {
  params: { positionId: string; candidateId: string };
};

const Page = ({ params }: TProps) => {
  return (
    <Stack sx={{ padding: 4, gap: 4 }}>
      <FormHeader />
      <PositionForm />
      {/* Candidate Page for position {params?.positionId} as {params.candidateId} */}
    </Stack>
  );
};

export default Page;
