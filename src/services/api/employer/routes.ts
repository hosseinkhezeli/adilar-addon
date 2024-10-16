export const routes = {
  introduction: '/api/authenticate/advertisement-process',
  getAdByDivarPostToken: (postToken: string | null) =>
    `/api/Advertisement/get-by-divar-post-token/${postToken}`,
  resumeData: (id: string | number) =>
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  applicantList: (pageParam: string | number) => `/posts?_page=${pageParam}`,
  positionList: (pageParam: string | number) => `/posts?_page=${pageParam}`,
};
