'use client';
import React from 'react';
import { HeaderPositions } from '@/app/employer/[id]/positions/components/HeaderPositions';
import { Stack, Typography } from '@mui/material';
import { InfoSection } from '@/app/employer/[id]/positions/[positionId]/[resumeId]/components/InfoSection';
import { DownloadResume } from '@/app/employer/[id]/positions/[positionId]/[resumeId]/components/DownloadResume';
import { HandlerButtons } from '@/app/employer/[id]/positions/[positionId]/[resumeId]/components/HandlerButtons';
import { fadeIn } from '@/styles/animationKeyframes';
import { useResume } from '@/app/employer/[id]/positions/[positionId]/[resumeId]/hooks/useResume';
import { SwipeTutorial } from '@/app/components/SwipeTutorial';

const Resume = () => {
  const {
    elementRef,
    isLoading,
    data,
    statusModal,
    handleCloseModal,
    customPush,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  } = useResume();

  return (
    <>
      <HeaderPositions title="برنامه نویس" />

      {isLoading ? (
        'loading'
      ) : (
        <Stack
          sx={{
            overflowX: 'hidden',
            overflowY: 'auto',
            flexGrow: 1,
            opacity: 0,
            animation: `${fadeIn} 1s ease forwards`,
          }}
        >
          <Stack
            component={'div'}
            ref={(el) => {
              if (el) elementRef.current = el;
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            sx={{
              px: 4,
              gap: 8,
              justifyContent: 'space-between',
              flexGrow: 1,
              overflowY: 'auto',
              pb: '60px',
              transition: 'all 0.1s linear',
            }}
          >
            <Typography>{data?.title}</Typography>
            <InfoSection />
            <Stack
              sx={{
                gap: 8,
                mb: 8,
              }}
            >
              <DownloadResume />
              <HandlerButtons onReject={customPush} nextId={data?.id + 1} />
            </Stack>
          </Stack>
        </Stack>
      )}
      <SwipeTutorial
        open={statusModal}
        handleNextModal={handleCloseModal}
        hintText="با کشیدن صفحه به چپ و راست میتوانید رزومه‌های نفر قبلی و بعدی را ببینید"
        withoutCard
      />
    </>
  );
};

export { Resume };
