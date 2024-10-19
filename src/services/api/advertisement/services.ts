import { adRoutes } from '@/services/api/advertisement/routes';
import {
  IGetApplicantListProps,
  IGetApplicantListResponse,
  IGetPositionListProps,
  IGetPositionListResponse,
} from '@/services/api/advertisement/types';
import { http } from '@/services/core/http';

export const getPositionList = ({
  pageParam,
}: IGetPositionListProps): Promise<IGetPositionListResponse> => {
  return http.get(adRoutes.positionList(pageParam));
};

export const getApplicantList = ({
  pageNumber,
  state,
  advertisementId,
}: IGetApplicantListProps): Promise<IGetApplicantListResponse> => {
  return http.get(adRoutes.applicantList(pageNumber, state, advertisementId));
};
