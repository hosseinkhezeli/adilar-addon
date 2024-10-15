'use client';
import { Stack } from '@mui/material';
import { PositionForm } from './PositionForm';
import { usePositionSubmission } from '../hooks/usePositionSubmission';
import { SubmissionSuccess } from './SubmissionSuccess';

export function PositionSubmissionFlow() {
  const { state, handleStateChange } = usePositionSubmission();
  console.log(state);
  return (
    <>
      <Stack sx={{ padding: 4, gap: 4 }}>
        {state === 'submission' && (
          <PositionForm handleStateChange={handleStateChange} />
        )}
        {state === 'done' && <SubmissionSuccess />}
      </Stack>
    </>
  );
}
