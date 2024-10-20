import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { DownloadIcon } from '@/app/icons/DownloadIcon';
import { PDFIcon } from '@/app/icons/PDFIcon';

interface IDownloadResume {
  resumeId: string;
  fullName: string;
}
const DownloadResume = ({ resumeId, fullName }: IDownloadResume) => {
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
        onClick={async () => {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/File/asset/${resumeId}`
          );
          const file = await res.blob();

          const url = URL.createObjectURL(file);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${fullName}-resume`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
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
          دانلود فایل رزومه
        </Typography>
      </Button>
    </Stack>
  );
};

export { DownloadResume };
