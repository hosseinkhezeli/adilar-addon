import { http } from '@/services/core/http';
import { routes } from './routes';
import {
  IGetResumeDataProps,
  TIntroductionDto,
  TIntroductionResponse,
} from './types';

// Introduction
export const submitIntroduction = (
  params: TIntroductionDto
): Promise<TIntroductionResponse> => {
  return http.post(routes.introduction, params);
};

export const getResumeData = ({ id }: IGetResumeDataProps): Promise<any> => {
  return http.get(routes.resumeData(id));
};
