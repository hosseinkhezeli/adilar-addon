export const adRoutes = {
  positionList: (pageNumber: string | number, textSearch: string) =>
    `/api/Advertisement/get-user-advertisements?pageNumber=${pageNumber}${textSearch ? `&textSearch=${textSearch}` : ''}`,
  applicantList: (
    pageParam: string | number,
    state: string,
    advertisementId: string,
    textSearch: string
  ) =>
    `/api/Advertisement/get-user-advertisement-submissions?pageNumber=${pageParam}&state=${state}&advertisementId=${advertisementId}${textSearch ? `&textSearch=${textSearch}` : ''}`,
};
