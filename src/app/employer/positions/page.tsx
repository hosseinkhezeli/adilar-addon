//@3rd Party
import React from 'react';
//__________________________________________________________

//@Mui
import { Stack } from '@mui/material';
//__________________________________________________________

//@Components
import { PositionList } from '@/app/employer/positions/components/PositionList';
//__________________________________________________________

const Page = () => {
  return (
    <Stack sx={styles.container}>
      <PositionList />
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
