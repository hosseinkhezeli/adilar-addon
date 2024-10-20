'use client';
//@Mui
import { Stack } from '@mui/material';
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
      <Stack sx={{ padding: 4, gap: 4, maxHeight: '100vh', height: '100%' }}>
        {state === 'submission' && (
          <PositionForm handleStateChange={handleStateChange} />
        )}
        {state === 'done' && <SubmissionSuccess />}
      </Stack>
    </>
  );
}
