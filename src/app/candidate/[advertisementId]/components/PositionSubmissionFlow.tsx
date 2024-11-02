'use client';
//@3rd Party
import React from 'react';
//_______________________________________________________________
//@Mui
import { Stack, styled } from '@mui/material';
//_______________________________________________________________

//@Components
import { PositionForm } from './PositionForm';
import { SubmissionSuccess } from './SubmissionSuccess';
//_______________________________________________________________

//@Hooks
import { usePositionSubmission } from '../hooks/usePositionSubmission';
//_______________________________________________________________

export function PositionSubmissionFlow() {
  const { state, handleStateChange } = usePositionSubmission();
  return (
    <>
      <Container>
        {state === 'submission' && (
          <PositionForm handleStateChange={handleStateChange} />
        )}
        {state === 'done' && <SubmissionSuccess />}
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
