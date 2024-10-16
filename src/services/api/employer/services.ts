import { http } from '@/services/core/http';
import { routes } from './routes';
import {
  IGetApplicantListProps,
  IGetPositionListProps,
  IGetResumeDataProps,
  TFormFieldsRes,
  TIntroductionDto,
  TIntroductionRes,
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

export const getApplicantList = ({
  pageParam,
}: IGetApplicantListProps): Promise<any> => {
  return http.get(routes.applicantList(pageParam), {
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
};

export const getPositionList = ({
  pageParam,
}: IGetPositionListProps): Promise<any> => {
  return http.get(routes.positionList(pageParam), {
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
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
  return http.post(routes.submitBasicInfo, body);
};

//Form Section
export const getFormFields = (): Promise<TFormFieldsRes> => {
  return http.get(routes.getFormFields);
};
