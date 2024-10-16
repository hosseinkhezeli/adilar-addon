import { adRoutes } from '@/services/api/advertisement/routes';
import {
  IGetPositionListProps,
  IGetPositionListResponse,
} from '@/services/api/advertisement/types';
import { http } from '@/services/core/http';

export const getPositionList = ({
  pageParam,
}: IGetPositionListProps): Promise<IGetPositionListResponse> => {
  return http.get(adRoutes.positionList(pageParam));
};
