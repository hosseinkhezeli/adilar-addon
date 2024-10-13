import { http } from '@/services/core/http';
import { routes } from './routes';
import { TIntroductionDto, TIntroductionResponse } from './types';

// Introduction
export const submitIntroduction = (
  params: TIntroductionDto
): Promise<TIntroductionResponse> => {
  return http.post(routes.introduction, params);
};
