//@3rd Party
import { useState } from 'react';
//_______________________________________________________________

//@Types
export type TSubmissionState = 'submission' | 'error' | 'done';
//_______________________________________________________________

export function usePositionSubmission() {
  const [state, setState] = useState<TSubmissionState>('submission');
  const handleStateChange = (state: TSubmissionState) => {
    setState(state);
  };
  return { state, handleStateChange };
}
