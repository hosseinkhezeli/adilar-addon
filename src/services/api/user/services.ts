import { routes } from './routes';
import { http } from '@/services/core/http';
import {
  IViewedTutorialProps,
  IViewedTutorialResponse,
  TGetUserRes,
} from '@/services/api/user/types';

export const getUser = (): Promise<TGetUserRes> => {
  return http.get(routes.getUser);
};

export const setViewedTutorial = (
  body: IViewedTutorialProps
): Promise<IViewedTutorialResponse> => {
  return http.patch(routes.tutorial, body);
};
