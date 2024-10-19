import { http } from '@/services/core/http';
import { routes } from './routes';
import {
  IGetResumeDataProps,
  TFormFieldsRes,
  TIntroductionDto,
  TIntroductionRes,
  TSubmitAdFormParams,
  TSubmitBasicInfoBody,
} from './types';

// Introduction
export const submitIntroduction = (
  params: TIntroductionDto
): Promise<TIntroductionRes> => {
  return http.post(routes.introduction, params);
};

export const getResumeData = ({ id }: IGetResumeDataProps): Promise<any> => {
  return http.get(routes.resumeData(id));
};

//Advertisement
export const getAdByDivarPostToken = (
  postToken: string | null
): Promise<any> => {
  return http.get(routes.getAdByDivarPostToken(postToken));
};

//Basic Info
export const submitBasicInfo = (
  body: TSubmitBasicInfoBody
): Promise<unknown> => {
  return http.post(routes.submitBasicInfo, body).then((response) => {
    console.log('Axios response:', response);
    return response.data; // Ensure you return the data
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
