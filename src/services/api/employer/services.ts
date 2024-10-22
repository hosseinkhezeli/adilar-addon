import { http } from '@/services/core/http';
import { routes } from './routes';
import {
  TFormFieldsRes,
  TIntroductionDto,
  TIntroductionRes,
  TSubmitAdFormParams,
  TSubmitBasicInfoBody,
} from './types';
import { ISubmitAdFormAsCandidate } from '../candidate/types';

// Introduction
export const submitIntroduction = (
  params: TIntroductionDto
): Promise<TIntroductionRes> => {
  return http.post(routes.introduction, params);
};

//Advertisement
export const getAdByDivarPostToken = (
  postToken: string | null
): Promise<ISubmitAdFormAsCandidate> => {
  return http.get(routes.getAdByDivarPostToken(postToken));
};

//Basic Info
export const submitBasicInfo = (
  body: TSubmitBasicInfoBody
): Promise<unknown> => {
  return http.post(routes.submitBasicInfo, body).then((response) => {
    return response.data;
  });
};

//Form Section
export const getFormFields = (): Promise<TFormFieldsRes> => {
  return http.get(routes.getFormFields);
};

export const submitAdForm = ({
  body,
}: TSubmitAdFormParams): Promise<TFormFieldsRes> => {
  return http.post(routes.submitAdForm, body);
};
