//@3rd Party
import React from 'react';
//_________________________________________________________

//@Mui
import { Stack } from '@mui/material';
//_________________________________________________________

//@Component
import { Applicant } from '@/app/employer/positions/[positionId]/[applicantId]/components/Applicant';
//_________________________________________________________

const Page = () => {
  return (
    <Stack sx={styles.container}>
      <Applicant />
    </Stack>
  );
};

export default Page;

const styles = {
  container: {
    height: '100%',
    overflow: 'auto',
    maxWidth: 560,
    width: '100%',
    margin: '0 auto',
  },
};
