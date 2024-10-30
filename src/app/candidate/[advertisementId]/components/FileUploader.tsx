'use client';
//@3rd Party
import React from 'react';
//__________________________________________________________________

//@Mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//__________________________________________________________________

//@Components
import { UploaderButton } from '@/app/components/UploaderButton';
//__________________________________________________________________

//@Types
type TFileUploader = {
  handleGetFileFromUploader: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  resumeFile: File | null;
  handleClearResumeFile: () => void;
  isResumeRequired: boolean;
};
//__________________________________________________________________

export function FileUploader({
  handleGetFileFromUploader,
  resumeFile,
  handleClearResumeFile,
  isResumeRequired,
}: TFileUploader) {
  return (
    <Stack sx={{ gap: 4, width: '100%', px: 2, my: 8 }}>
      <Typography variant="caption1">
        در این بخش فایل رزومه شخصی خود را بارگذاری کنید
        {isResumeRequired && <Typography color="error.main">*</Typography>}
      </Typography>
      <UploaderButton
        onFileChange={handleGetFileFromUploader}
        file={resumeFile}
        onDelete={handleClearResumeFile}
      />
    </Stack>
  );
}
