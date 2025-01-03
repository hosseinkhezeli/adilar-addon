import {} from '@/services/api/advertisement/services';
import {
  getSubmission,
  setApproval,
  setIsReviewed,
} from '@/services/api/submission/services';

import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetSubmission = ({ id }: { id: number | string }) => {
  return useQuery({
    queryKey: ['get-submission', id],
    queryFn: () => getSubmission({ id }),
    staleTime: 1000 * 60 * 60,
    enabled: Boolean(id),
  });
};

export const useSetIsReviewed = () => {
  return useMutation({
    mutationKey: ['is-reviewed'],
    mutationFn: setIsReviewed,
  });
};

export const useSetApproval = () => {
  return useMutation({
    mutationKey: ['approval-applicant'],
    mutationFn: setApproval,
  });
};
