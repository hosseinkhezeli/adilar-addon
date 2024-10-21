'use client';
//@3rd Party
import React from 'react';
//_________________________________________________________

//@Mui
import { Stack } from '@mui/material';
//_________________________________________________________

//@Components
import { HeaderPositions } from '@/app/employer/positions/components/HeaderPositions';
import { InfoSection } from '@/app/employer/positions/[positionId]/[applicantId]/components/InfoSection';
import { DownloadResume } from '@/app/employer/positions/[positionId]/[applicantId]/components/DownloadResume';
import { HandlerButtons } from '@/app/employer/positions/[positionId]/[applicantId]/components/HandlerButtons';
import { SwipeTutorial } from '@/app/components/SwipeTutorial';
import { SvgLoading } from '@/app/components/Loading';
//_________________________________________________________

//@Hooks
import { useApplicant } from '@/app/employer/positions/[positionId]/[applicantId]/hooks/useApplicant';
//_________________________________________________________

//@Styles
import { fadeIn } from '@/styles/animationKeyframes';
//_________________________________________________________

const Applicant = () => {
  const {
    elementRef,
    isLoading,
    data,
    statusModal,
    isApprovalLoading,
    handleApplicant,
    advertisement,
    handleCloseModal,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  } = useApplicant();

  return (
    <>
      <HeaderPositions title={advertisement?.title || ''} />

      {isLoading ? (
        <SvgLoading />
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
                <Stack
                  sx={{
                    overflow: 'auto',
                  }}
                >
                  <InfoSection data={data} />
                </Stack>
                <Stack
                  sx={{
                    gap: 8,
                    mb: 8,
                  }}
                >
                  {!data.resumeId ? null : (
                    <DownloadResume
                      resumeId={data.resumeId}
                      fullName={
                        data.fields.find(
                          (item) => item.semanticType == 'FirstName'
                        )?.value +
                        ' ' +
                        data.fields.find(
                          (item) => item.semanticType == 'LastName'
                        )?.value
                      }
                    />
                  )}

                  {data.state === 'Pending' && (
                    <HandlerButtons
                      applicantState={data.state}
                      isApprovalLoading={isApprovalLoading}
                      onApprove={handleApplicant.onApprove}
                      onReject={handleApplicant.onReject}
                    />
                  )}
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
