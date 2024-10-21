//@3rd Party
import { UIEvent, useEffect, useState, useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
//_____________________________________________________________________

//@Hooks
import { useGetPositionList } from '@/services/api/advertisement/hooks';
import useAdvertisementStore from '@/store/advertisement/advertisementSlice';
//_____________________________________________________________________

//@Types
import { Route } from 'next';
import { IAdvertisement } from '@/services/api/advertisement/types';
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
//_____________________________________________________________________

const usePositionList = () => {
  //Dependencies
  const { push: navigateTo } = useRouter();
  const [isNavigating, startTransition] = useTransition();
  const pathname = usePathname();
  const { setAdvertisement } = useAdvertisementStore();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get('textSearch') || ''
  );

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPositionList({ textSearch: searchParams.get('textSearch') || '' });

  //Handlers
  function handleFetchOnScroll(e: UIEvent) {
    const at20PercentEnd =
      1 -
      (e.currentTarget.clientHeight + e.currentTarget.scrollTop) /
        e.currentTarget.scrollHeight;

    if (at20PercentEnd < 0.2 && hasNextPage && !isFetchingNextPage)
      fetchNextPage();
  }

  const handleNavigation = (id: string | undefined) => {
    let ad: IAdvertisement | undefined;
    for (const page of data?.pages || []) {
      ad = page.advertisements.find((advertisement) => advertisement.id === id);
      if (ad) {
        break;
      }
    }
    setAdvertisement(ad);
    startTransition(() => {
      navigateTo(`positions/${id}` as Route);
    });
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  function handlePushSearchValue() {
    navigateTo(
      `${pathname}${searchValue ? `?textSearch=${searchValue}` : ''}` as Route
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
    isNavigating,
  };
};

export default usePositionList;
