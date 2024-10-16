export const routes = {
  introduction: '/api/authenticate/advertisement-process',
  getAdByDivarPostToken: (postToken: string | null) =>
    `/api/Advertisement/get-by-divar-post-token/${postToken}`,
  submitBasicInfo: '/api/Authenticate/complete-basic-info',
  resumeData: (id: string | number) =>
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  applicantList: (pageParam: string | number) => `/posts?_page=${pageParam}`,
  positionList: (pageParam: string | number) => `/posts?_page=${pageParam}`,
  getFormFields: '/api/Advertisement/field',
};
