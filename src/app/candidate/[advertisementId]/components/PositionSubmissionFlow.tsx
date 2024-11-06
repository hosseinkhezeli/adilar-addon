'use client';
//@3rd Party
import React from 'react';
//_______________________________________________________________
//@Mui
import { Stack, styled } from '@mui/material';
//_______________________________________________________________

//@Components
import { PositionForm } from './PositionForm';
//_______________________________________________________________

//@Hooks
import { usePositionSubmission } from '../hooks/usePositionSubmission';
import { SubmissionResult } from '@/app/candidate/[advertisementId]/components/SubmissionResult';
//_______________________________________________________________

export function PositionSubmissionFlow() {
  const { state, handleStateChange, submission_state } =
    usePositionSubmission();

  return (
    <>
      <Container>
        {submission_state ? (
          <SubmissionResult />
        ) : (
          <>
            {state === 'submission' && (
              <PositionForm handleStateChange={handleStateChange} />
            )}
            {state === 'done' && <SubmissionResult />}
          </>
        )}
      </Container>
    </>
  );
}
const Container = styled(Stack)(() => ({
  padding: 8,
  gap: 4,
  maxWidth: 560,
  width: '100%',
  margin: '0 auto 32px',
  height: 'auto',
}));
