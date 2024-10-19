'use client';
import React from 'react';
import { HeaderPositions } from '@/app/employer/[id]/positions/components/HeaderPositions';
import { Stack } from '@mui/material';
import { InfoSection } from '@/app/employer/[id]/positions/[positionId]/[applicantId]/components/InfoSection';
import { DownloadResume } from '@/app/employer/[id]/positions/[positionId]/[applicantId]/components/DownloadResume';
import { HandlerButtons } from '@/app/employer/[id]/positions/[positionId]/[applicantId]/components/HandlerButtons';
import { fadeIn } from '@/styles/animationKeyframes';
import { SwipeTutorial } from '@/app/components/SwipeTutorial';
import { useApplicant } from '@/app/employer/[id]/positions/[positionId]/[applicantId]/hooks/useApplicant';

const Applicant = () => {
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
  } = useApplicant();

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
            {!data ? null : (
              <>
                <InfoSection data={data} />
                <Stack
                  sx={{
                    gap: 8,
                    mb: 8,
                  }}
                >
                  <DownloadResume />
                  <HandlerButtons
                    onReject={customPush}
                    nextId={data?.nextSubmissionId}
                  />
                </Stack>
              </>
            )}
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

export { Applicant };
