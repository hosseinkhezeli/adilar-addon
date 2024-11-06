//@3rd Party
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
//_______________________________________________________________

//@Types
export type TSubmissionState = 'submission' | 'error' | 'done';
//_______________________________________________________________

export function usePositionSubmission() {
  const [state, setState] = useState<TSubmissionState>('submission');
  const searchParams = useSearchParams();
  const handleStateChange = (state: TSubmissionState) => {
    setState(state);
  };
  return {
    state,
    handleStateChange,
    submission_state: searchParams.get('submission_state'),
  };
}
