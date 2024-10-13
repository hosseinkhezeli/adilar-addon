import { useMutation } from '@tanstack/react-query';
import { TIntroductionDto } from './types';
import { submitIntroduction } from './services';

export const useSubmitIntroduction = () =>
  useMutation({
    mutationKey: ['submit-introduction'],
    mutationFn: (params: TIntroductionDto) => submitIntroduction(params),
  });
