import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { TGetAdFormAsCandidateParams, TSubmitAdFormBody } from './types';
import {
  getAdFormAsCandidate,
  submitAdFormAsCandidate,
  submitResumeFile,
} from './services';

//Ad as Candidate
export const useGetAdFormAsCandidate = (params: TGetAdFormAsCandidateParams) =>
  useQuery({
    queryKey: ['get-ad-form-as-candidate'],
    queryFn: () => getAdFormAsCandidate(params),
    enabled: !!params.postToken,
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
