import React from 'react';
import { Stack, Typography } from '@mui/material';
import { FormSection } from '@/app/employer/[id]/form-creator/components/FormSection';

export default function Home() {
  return (
    <Stack alignItems={'center'} sx={{ height: '100%', width: '100%' }}>
      <Typography variant={'body2'} my={6}>
        فرم ساز برنامه نویس فرانت
      </Typography>
      <FormSection />
    </Stack>
  );
}
