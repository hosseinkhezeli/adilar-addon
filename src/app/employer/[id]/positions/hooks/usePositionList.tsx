import { useRouter } from 'next/navigation';

type TUsePositionList = {
  id: string;
};
export interface IPositionCard {
  id: string;
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
  const { push: navigateTo } = useRouter();
  const handleNavigation = (id: string | undefined) => {
    navigateTo(`positions/${id}`);
  };
  return { positionsMock, handleNavigation };
};

export default usePositionList;
const positionsMock: IPositionCard[] = [
  {
    id: '1',
    title: 'برنامه نویس فرانت',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 64 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 4,
  },
  {
    id: '2',
    title: 'برنامه نویس بک اند',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 20 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 0,
  },
  {
    id: '3',
    title: 'برنامه نویس Junior',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 20 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 20,
  },
  {
    id: '4',
    title: 'برنامه نویس Java',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 64 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 0,
  },
  {
    id: '5',
    title: 'برنامه نویس .Net',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 64 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 0,
  },
  {
    id: '6',
    title: 'برنامه نویس فرانت',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 64 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 4,
  },
  {
    id: '7',
    title: 'برنامه نویس فرانت',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 64 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 2,
  },
  {
    id: '8',
    title: 'برنامه نویس',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 64 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 4,
  },
  {
    id: '9',
    title: 'برنامه نویس فرانت',
    location: { title: 'دفتر مرکزی تهران' },
    createdAt: new Date(Date.now()),
    candidates: { count: 64 },
    lastCandidateSubmission: new Date(Date.now()),
    unreadCount: 1,
  },
];
