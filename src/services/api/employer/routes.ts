export const routes = {
  introduction: '/api/authenticate/advertisement-process',
  getAdByDivarPostToken: (postToken: string | null) =>
    `/api/advertisement/get-by-divar-post-token/${postToken}`,
  submitBasicInfo: '/api/authenticate/complete-basic-info',
  getFormFields: '/api/advertisement/field',
  submitAdForm: '/api/advertisement/form',
};
