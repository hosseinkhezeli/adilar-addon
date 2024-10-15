import { useMutation, useQuery } from '@tanstack/react-query';
import { IGetResumeDataProps, TIntroductionDto } from './types';
import { getResumeData, submitIntroduction } from './services';

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
