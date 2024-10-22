import { useMutation } from '@tanstack/react-query';
import { mockLogin } from './services';

export const useMockLogin = () =>
  useMutation({
    mutationKey: ['mock-login'],
    mutationFn: () => mockLogin(),
  });
