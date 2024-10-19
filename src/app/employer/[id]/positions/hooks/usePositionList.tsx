import { useGetPositionList } from '@/services/api/advertisement/hooks';
import { Route } from 'next';
import { useRouter } from 'next/navigation';
import { UIEvent, useState } from 'react';

type TUsePositionList = {
  id: string;
};
export interface IPositionCard {
  id: string;
  title: string;
  location: {
    title: string;
  };
  createdAt: Date | string;
  candidates: {
    count: number;
  };
  lastCandidateSubmission: Date | string | null;
  unreadCount: number;
}

const usePositionList = ({ id }: TUsePositionList) => {
  const { push: navigateTo } = useRouter();
  const [searchValue, setSearchValue] = useState<string>();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPositionList();

  function handleFetchOnScroll(e: UIEvent) {
    const at20PercentEnd =
      1 -
      (e.currentTarget.clientHeight + e.currentTarget.scrollTop) /
        e.currentTarget.scrollHeight;

    if (at20PercentEnd < 0.2 && hasNextPage && !isFetchingNextPage)
      fetchNextPage();
  }

  const handleNavigation = (id: string | undefined) => {
    navigateTo(`positions/${id}` as Route);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  return {
    positionsMock,
    searchValue,
    data,
    handleNavigation,
    handleSearch,
    handleFetchOnScroll,
  };
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
