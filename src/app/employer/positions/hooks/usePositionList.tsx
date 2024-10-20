import { useGetPositionList } from '@/services/api/advertisement/hooks';
import { Route } from 'next';
import { useRouter } from 'next/navigation';
import { UIEvent, useState } from 'react';

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

const usePositionList = () => {
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
    searchValue,
    data,
    handleNavigation,
    handleSearch,
    handleFetchOnScroll,
  };
};

export default usePositionList;
