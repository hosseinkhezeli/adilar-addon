import { adRoutes } from '@/services/api/advertisement/routes';
import {
  IGetApplicantListProps,
  IGetApplicantListResponse,
  IGetPositionListProps,
  IGetPositionListResponse,
} from '@/services/api/advertisement/types';
import { http } from '@/services/core/http';

export const getPositionList = ({
  pageNumber,
  textSearch,
}: IGetPositionListProps): Promise<IGetPositionListResponse> => {
  return http.get(adRoutes.positionList(pageNumber, textSearch));
};

export const getApplicantList = ({
  pageNumber,
  state,
  advertisementId,
  textSearch,
}: IGetApplicantListProps): Promise<IGetApplicantListResponse> => {
  return http.get(
    adRoutes.applicantList(pageNumber, state, advertisementId, textSearch)
  );
};
