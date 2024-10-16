import { http } from '@/services/core/http';
import { routes } from './routes';
import { TGetAdFormAsCandidateParams } from './types';

// Ad as C
export const getAdFormAsCandidate = (
  params: TGetAdFormAsCandidateParams
): Promise<unknown> => {
  return http.get(routes.getAdFormAsCandidate(params?.adId));
};
