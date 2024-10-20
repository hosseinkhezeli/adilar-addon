import { useGetPositionList } from '@/services/api/advertisement/hooks';
import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { UIEvent, useEffect, useState } from 'react';

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
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get('textSearch') || ''
  );
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPositionList({ textSearch: searchParams.get('textSearch') || '' });

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

  function handlePushSearchValue() {
    navigateTo(
      `${pathName}${searchValue ? `?textSearch=${searchValue}` : ''}` as Route
    );
  }

  useEffect(() => {
    const id = setTimeout(() => {
      handlePushSearchValue();
    }, 500);
    return () => clearTimeout(id);
  }, [searchValue]);

  return {
    searchValue,
    data,
    handleNavigation,
    handleSearch,
    handleFetchOnScroll,
  };
};

export default usePositionList;
