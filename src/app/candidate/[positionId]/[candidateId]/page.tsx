//@3rd Party
import React from 'react';
//_______________________________________________________________

//@Mui
import { Stack } from '@mui/material';
//_______________________________________________________________

//@Components
import { PositionForm } from './components/PositionForm';
import { FormHeader } from './components/FormHeader';
//_______________________________________________________________

//@Types
type TProps = {
  params: { positionId: string; candidateId: string };
};
//_______________________________________________________________

const Page = ({ params }: TProps) => {
  return (
    <>
      <FormHeader />
      <Stack sx={{ padding: 4, gap: 4 }}>
        <PositionForm />
        {/* Candidate Page for position {params?.positionId} as {params.candidateId} */}
      </Stack>
    </>
  );
};

export default Page;
