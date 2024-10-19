import { submissionRoutes } from '@/services/api/submission/routes';
import {
  IGetSubmissionProps,
  IGetSubmissionResponse,
} from '@/services/api/submission/types';
import { http } from '@/services/core/http';

export const getSubmission = ({
  id,
}: IGetSubmissionProps): Promise<IGetSubmissionResponse> => {
  return http.get(submissionRoutes.getSubmission(id));
};
