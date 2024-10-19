export const adRoutes = {
  positionList: (pageNumber: string | number) =>
    `/api/Advertisement/get-user-advertisements?pageNumber=${pageNumber}`,
  applicantList: (
    pageParam: string | number,
    state: string,
    advertisementId: string
  ) =>
    `/api/Advertisement/get-user-advertisement-submissions?pageNumber=${pageParam}&state=${state}&advertisementId=${advertisementId}`,
};
