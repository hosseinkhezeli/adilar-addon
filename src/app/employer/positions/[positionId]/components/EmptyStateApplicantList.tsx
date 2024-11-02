import React from 'react';
import { Stack, Typography } from '@mui/material';
import emptyImage from '@/assets/images/empty-applicant-list.svg';
import Image from 'next/image';

const EmptyStateApplicantList = () => {
  return (
    <Stack sx={styles.container}>
      <Image
        src={emptyImage}
        width={70}
        height={80}
        alt="empty-applicant-list"
      />
      <Typography variant="body2.bold" color="secondary.3">
        هنوز هیچ رزومه‌ای وجود ندارد!
      </Typography>
    </Stack>
  );
};

export { EmptyStateApplicantList };

const styles = {
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
};
