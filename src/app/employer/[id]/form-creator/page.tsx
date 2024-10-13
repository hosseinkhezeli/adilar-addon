import { FormSection } from '@/app/employer/[id]/form-creator/components/FormSection';
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Stack
        sx={{ height: '100%', width: '100%', pb: 6, justifyContent: 'center' }}
      >
        <FormSection />
      </Stack>
    </>
  );
};

export default Page;
