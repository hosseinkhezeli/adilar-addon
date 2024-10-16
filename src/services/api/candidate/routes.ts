export const routes = {
  getAdFormAsCandidate: (divarPostToken: string) =>
    `/api/Advertisement/get-by-divar-post-token-for-candidate/${divarPostToken}`,
  submitAdForm: `/api/submission`,
  submitResumeFile: `/api/submission/resume`,
};
