import { useMutation } from '@tanstack/react-query';
import { mockLogin, setViewedTutorial } from './services';

export const useMockLogin = () =>
  useMutation({
    mutationKey: ['mock-login'],
    mutationFn: () => mockLogin(),
  });

export const useSetViewedTutorial = () => {
  return useMutation({
    mutationKey: ['viewed-tutorial'],
    mutationFn: setViewedTutorial,
  });
};
