import React from 'react';
import { HeaderPositions } from '@/app/employer/[id]/positions/components/HeaderPositions';
import { Stack } from '@mui/material';
import { InfoSection } from '@/app/employer/[id]/positions/[positionId]/[resumeId]/components/InfoSection';
import { DownloadResume } from '@/app/employer/[id]/positions/[positionId]/[resumeId]/components/DownloadResume';
import { HandlerButtons } from '@/app/employer/[id]/positions/[positionId]/[resumeId]/components/HandlerButtons';

const Resume = () => {
  return (
    <>
      <HeaderPositions title="برنامه نویس" />
      <Stack
        sx={{
          px: 4,
          gap: 8,
          backgroundColor: 'background.3',
          justifyContent: 'space-between',
          flexGrow: 1,
          overflow: 'auto',
          pb: '60px',
        }}
      >
        <InfoSection />
        <Stack
          sx={{
            gap: 8,
            mb: 8,
          }}
        >
          <DownloadResume />
          <HandlerButtons />
        </Stack>
      </Stack>
    </>
  );
};

export { Resume };
