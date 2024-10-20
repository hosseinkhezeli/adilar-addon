import { TGetAdFormAsCandidateParams } from './types';

export const routes = {
  getAdFormAsCandidate: ({ postToken }: TGetAdFormAsCandidateParams) =>
    `/api/Advertisement/get-by-divar-post-token-for-candidate/${postToken}`,
  submitAdForm: `/api/submission`,
  submitResumeFile: `/api/submission/resume`,
};
