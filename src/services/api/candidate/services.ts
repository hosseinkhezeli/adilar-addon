import { http } from '@/services/core/http';
import { routes } from './routes';
import {
  ISubmitAdFormAsCandidate,
  TGetAdFormAsCandidateParams,
  TResumeFileRes,
  TSubmitAdFormBody,
} from './types';

// Ad as Candidate
export const getAdFormAsCandidate = (
  params: TGetAdFormAsCandidateParams
): Promise<ISubmitAdFormAsCandidate> => {
  return http.get(routes.getAdFormAsCandidate(params?.adId));
};

export const submitAdFormAsCandidate = (
  body: TSubmitAdFormBody
): Promise<unknown> => {
  return http.post(routes.submitAdForm, body);
};

export const submitResumeFile = (body: FormData): Promise<TResumeFileRes> => {
  return http.post(routes.submitResumeFile, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
