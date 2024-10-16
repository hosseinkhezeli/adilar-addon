import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { TGetAdFormAsCandidateParams } from './types';
import { getAdFormAsCandidate } from './services';

//Ad as Candidate
export const useGetAdFormAsCandidate = () =>
  useMutation({
    mutationKey: ['get-ad-form-as-candidate'],
    mutationFn: (params: TGetAdFormAsCandidateParams) =>
      getAdFormAsCandidate(params),
  });
//______________________________________________________________
