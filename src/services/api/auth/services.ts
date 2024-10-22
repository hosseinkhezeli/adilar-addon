import { http } from '@/services/core/http';
import { routes } from './routes';
import { ILoginRes } from './types';

// Authentication
export const mockLogin = (): Promise<ILoginRes> => {
  return http.get(routes.mockLogin);
};
