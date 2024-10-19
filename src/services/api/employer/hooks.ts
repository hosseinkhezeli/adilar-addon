import { useMutation, useQuery } from '@tanstack/react-query';
import {
  IGetResumeDataProps,
  TAdFormDto,
  TIntroductionDto,
  TSubmitBasicInfoBody,
} from './types';
import {
  getAdByDivarPostToken,
  getFormFields,
  getResumeData,
  submitBasicInfo,
  submitAdForm,
  submitIntroduction,
} from './services';
import useUserStore from '@/store/user/userSlice';

//Introduction
export const useSubmitIntroduction = () =>
  useMutation({
    mutationKey: ['submit-introduction'],
    mutationFn: (params: TIntroductionDto) => submitIntroduction(params),
  });
//______________________________________________________________

//Resume Data
export const useGetResumeData = ({ id }: IGetResumeDataProps) => {
  return useQuery({
    queryKey: ['resumeData', id],
    queryFn: () => getResumeData({ id }),
  });
};
//______________________________________________________________

//Advertisement
export const useGetAdByDivarPostToken = (postToken: string | null) => {
  const { token } = useUserStore();
  return useQuery({
    queryKey: ['advertisement', postToken],
    queryFn: () => getAdByDivarPostToken(postToken),
    enabled: !!postToken || !!token,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};
//______________________________________________________________

//Basic Info
export const useSubmitBasicInfo = () =>
  useMutation({
    mutationKey: ['submit-basic-info'],
    mutationFn: (body: TSubmitBasicInfoBody) => submitBasicInfo(body),
  });
//______________________________________________________________

//Form Section
export const useGetFormFields = () => {
  return useQuery({
    queryKey: ['form-fields'],
    queryFn: () => getFormFields(),
    refetchOnWindowFocus: false,
    staleTime: 10000,
  });
};

export const useSubmitAdForm = () => {
  return useMutation({
    mutationKey: ['submit-ad-form'],
    mutationFn: (body: TAdFormDto) => submitAdForm({ body }),
  });
};
//______________________________________________________________
