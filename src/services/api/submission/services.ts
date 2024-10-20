import { submissionRoutes } from '@/services/api/submission/routes';
import {
  IGetSubmissionProps,
  IGetSubmissionResponse,
  ISetApprovalProps,
  ISetIsReviewedProps,
} from '@/services/api/submission/types';
import { http } from '@/services/core/http';

export const getSubmission = ({
  id,
}: IGetSubmissionProps): Promise<IGetSubmissionResponse> => {
  return http.get(submissionRoutes.getSubmission(id));
};

export const setIsReviewed = ({ id }: ISetIsReviewedProps) => {
  return http.patch(submissionRoutes.setIsReviewed(id), JSON.stringify(true), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const setApproval = ({ id, isApprove }: ISetApprovalProps) => {
  return http.patch(
    submissionRoutes.setApproval(id),
    JSON.stringify(isApprove),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
