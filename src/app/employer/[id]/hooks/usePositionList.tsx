type TUsePositionList = {
  id: string;
};
export interface IPositionCard {
  title: string;
  location: {
    title: string;
  };
  createdAt: Date;
  candidates: {
    count: number;
  };
  lastCandidateSubmission: Date;
  unreadCount: number;
}

const usePositionList = ({ id }: TUsePositionList) => {
  return { positionsMock };
};

export default usePositionList;
const positionsMock: IPositionCard[] = [
  {
    title: 'برنامه نویس فرانت',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 64 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 4,
  },
  {
    title: 'برنامه نویس بک اند',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 20 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 0,
  },
  {
    title: 'برنامه نویس Junior',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 20 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 20,
  },
  {
    title: 'برنامه نویس Java',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 64 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 0,
  },
  {
    title: 'برنامه نویس .Net',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 64 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 0,
  },
  {
    title: 'برنامه نویس فرانت',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 64 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 4,
  },
  {
    title: 'برنامه نویس فرانت',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 64 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 2,
  },
  {
    title: 'برنامه نویس',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 64 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 4,
  },
  {
    title: 'برنامه نویس فرانت',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 64 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 1,
  },
];
