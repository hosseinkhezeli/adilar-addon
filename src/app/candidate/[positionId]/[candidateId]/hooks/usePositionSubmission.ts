import { useState } from 'react';

export type TSubmissionState = 'submission' | 'error' | 'done';

export function usePositionSubmission() {
  const [state, setState] = useState<TSubmissionState>('submission');
  const handleStateChange = (state: TSubmissionState) => {
    setState(state);
  };
  return { state, handleStateChange };
}
