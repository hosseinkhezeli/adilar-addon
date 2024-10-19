import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { TGetAdFormAsCandidateParams, TSubmitAdFormBody } from './types';
import {
  getAdFormAsCandidate,
  submitAdFormAsCandidate,
  submitResumeFile,
} from './services';

//Ad as Candidate
export const useGetAdFormAsCandidate = () =>
  useMutation({
    mutationKey: ['get-ad-form-as-candidate'],
    mutationFn: (params: TGetAdFormAsCandidateParams) =>
      getAdFormAsCandidate(params),
  });

export const useSubmitAdFormAsCandidate = () =>
  useMutation({
    mutationKey: ['submit-ad-form'],
    mutationFn: (body: TSubmitAdFormBody) => submitAdFormAsCandidate(body),
  });

export const useSubmitResumeFile = () =>
  useMutation({
    mutationKey: ['submit-resume-file'],
    mutationFn: (body: FormData) => submitResumeFile(body),
  });
//______________________________________________________________
