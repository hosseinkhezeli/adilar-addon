import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { IGetResumeDataProps, TIntroductionDto } from './types';
import {
  getAdByDivarPostToken,
  getApplicantList,
  getPositionList,
  getResumeData,
  submitIntroduction,
} from './services';
import useUserStore from '@/store/user/userSlice';

export const useSubmitIntroduction = () =>
  useMutation({
    mutationKey: ['submit-introduction'],
    mutationFn: (params: TIntroductionDto) => submitIntroduction(params),
  });

export const useGetResumeData = ({ id }: IGetResumeDataProps) => {
  return useQuery({
    queryKey: ['resumeData', id],
    queryFn: () => getResumeData({ id }),
  });
};

export const useGetApplicantList = () => {
  return useInfiniteQuery({
    queryKey: ['applicantList'],
    queryFn: getApplicantList,
    initialPageParam: 1,
    getNextPageParam: (_, __, lastPageParam) => lastPageParam + 1,
    staleTime: 1000 * 60 * 60,
  });
};

export const useGetPositionList = () => {
  return useInfiniteQuery({
    queryKey: ['positionList'],
    queryFn: getPositionList,
    initialPageParam: 1,
    getNextPageParam: (_, __, lastPageParam) => lastPageParam + 1,
    staleTime: 1000 * 60 * 60,
  });
};

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
