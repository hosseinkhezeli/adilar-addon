//@3rd Party
import React from 'react';
//_______________________________________________________________

//@Mui
import { Stack } from '@mui/material';
//_______________________________________________________________

//@Components
import { ApplicantList } from './components/ApplicantList';
//_______________________________________________________________

const Page = () => {
  return (
    <Stack sx={styles.container}>
      <ApplicantList />
    </Stack>
  );
};

export default Page;

const styles = {
  container: {
    height: '100%',
    overflow: 'auto',
  },
};
