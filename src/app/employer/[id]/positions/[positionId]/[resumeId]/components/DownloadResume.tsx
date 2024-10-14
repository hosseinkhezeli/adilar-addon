import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { DownloadIcon } from '@/app/icons/DownloadIcon';
import { PDFIcon } from '@/app/icons/PDFIcon';

const DownloadResume = () => {
  return (
    <Stack
      sx={{
        gap: 2,
      }}
    >
      <Typography variant="body3.medium" color="text.15">
        رزومه شخصی
      </Typography>
      <Button
        variant="outlined"
        endIcon={<DownloadIcon />}
        sx={{
          justifyContent: 'space-between',
          backgroundColor: 'transparent !important',
        }}
      >
        <Typography
          variant="caption1"
          component={'span'}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <PDFIcon />
          دانلود
        </Typography>
      </Button>
    </Stack>
  );
};

export { DownloadResume };
