import { FormSection } from '@/app/employer/form-creator/components/FormSection';
import { Stack } from '@mui/material';
import React from 'react';

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Stack
        sx={{ height: '100%', width: '100%', pb: 17, justifyContent: 'center' }}
      >
        <FormSection />
      </Stack>
    </>
  );
};

export default Page;
