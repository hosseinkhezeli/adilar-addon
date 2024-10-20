import { http } from '@/services/core/http';
import { routes } from './routes';
import {
  ILoginRes,
  IViewedTutorialProps,
  IViewedTutorialResponse,
} from './types';

// Authentication
export const mockLogin = (): Promise<ILoginRes> => {
  return http.get(routes.mockLogin);
};

export const setViewedTutorial = (
  body: IViewedTutorialProps
): Promise<IViewedTutorialResponse> => {
  return http.patch(routes.tutorial, body);
};
