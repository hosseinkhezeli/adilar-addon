export const submissionRoutes = {
  getSubmission: (id: number | string) => `/api/Submission/${id}`,
  setIsReviewed: (id: number | string) => `/api/Submission/review/${id}`,
  setApproval: (id: number | string) => `/api/Submission/approval/${id}`,
};
