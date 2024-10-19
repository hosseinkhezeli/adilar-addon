export const routes = {
  introduction: '/api/authenticate/advertisement-process',
  getAdByDivarPostToken: (postToken: string | null) =>
    `/api/advertisement/get-by-divar-post-token/${postToken}`,
  submitBasicInfo: '/api/authenticate/complete-basic-info',
  resumeData: (id: string | number) =>
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  getFormFields: '/api/advertisement/field',
  submitAdForm: '/api/advertisement/form',
};
