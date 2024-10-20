import React, { SyntheticEvent, useEffect, useTransition } from 'react';
import { Typography } from '@mui/material';
import { Route } from 'next';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { ReactNode, UIEvent, useState } from 'react';
import { useGetApplicantList } from '@/services/api/advertisement/hooks';
import useAdvertisementStore from '@/store/advertisement/advertisementSlice';

export type TApplicantCard = {
  id: string;
  file?: File | null;
  candidate?: {
    fistName?: string;
    lastName?: string;
  };
  createdAt?: string | Date;
  isReviewed?: boolean;
  onClick?(): void;
};

export function useApplicantList() {
  const { advertisement } = useAdvertisementStore();
  const { push: navigateTo } = useRouter();
  const [isNavigating, startTransition] = useTransition();
  const pathName = usePathname();
  const params = useParams<{ positionId: string }>();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get('textSearch') || ''
  );
  const [statusModal, setStatusModal] = useState<boolean>(true);
  const [selectedTab, setSelectedTab] = useState<string>(
    searchParams.has('state') ? searchParams.get('state')! : 'Pending'
  );

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetApplicantList({
      advertisementId: params.positionId,
      state: selectedTab,
      textSearch: searchParams.get('textSearch') || '',
    });

  const tabs: { label: ReactNode }[] = [
    {
      label: (
        <Typography variant="caption1.bold" color="grey.15">
          {`در انتظار بررسی (${data?.pages[0].submissionsByStateResult.find((item) => item.state == 'Pending')?.count || 0})`}
        </Typography>
      ),
    },
    {
      label: (
        <Typography variant="caption1.bold" color="grey.15">
          {`تایید شده (${data?.pages[0].submissionsByStateResult.find((item) => item.state == 'Accepted')?.count || 0})`}
        </Typography>
      ),
    },
    {
      label: (
        <Typography variant="caption1.bold" color="grey.15">
          {`رد شده (${data?.pages[0].submissionsByStateResult.find((item) => item.state == 'Rejected')?.count || 0})`}
        </Typography>
      ),
    },
  ];

  function handleFetchOnScroll(e: UIEvent) {
    const at20PercentEnd =
      1 -
      (e.currentTarget.clientHeight + e.currentTarget.scrollTop) /
        e.currentTarget.scrollHeight;

    if (at20PercentEnd < 0.2 && hasNextPage && !isFetchingNextPage)
      fetchNextPage();
  }

  function handleNavigate({ id }: { id: string }) {
    if (!data) {
      return null;
    }
    startTransition(() => {
      navigateTo(`${pathName}/${id}` as Route);
    });
  }

  function handleSearch(value: string) {
    setSearchValue(value);
  }

  function handleCloseModal() {
    setStatusModal(false);
  }

  function handleTabsFilter(e: SyntheticEvent, value: number) {
    if (value == 0) {
      setSelectedTab('Pending');
    } else if (value == 1) {
      setSelectedTab('Accepted');
    } else {
      setSelectedTab('Rejected');
    }
  }

  function handlePushSearchValue() {
    navigateTo(
      `${pathName}${searchValue ? `?textSearch=${searchValue}` : ''}` as Route
    );
  }

  useEffect(() => {
    const id = setTimeout(() => {
      handlePushSearchValue();
    }, 750);
    return () => clearTimeout(id);
  }, [searchValue]);

  return {
    searchValue,
    data,
    statusModal,
    tabs,
    advertisement,
    handleSearch,
    handleNavigate,
    handleFetchOnScroll,
    handleCloseModal,
    handleTabsFilter,
    isNavigating,
  };
}
