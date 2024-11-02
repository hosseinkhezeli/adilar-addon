'use client';
//@3rd Party
import React, { useState, useEffect, useTransition, useMemo } from 'react';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
//_________________________________________________________________

//@Mui
import { Typography } from '@mui/material';
//_________________________________________________________________

//@Hooks
import useAdvertisementStore from '@/store/advertisement/advertisementSlice';
import useUserStore from '@/store/user/userSlice';
import { useGetApplicantList } from '@/services/api/advertisement/hooks';
import { useSetViewedTutorial } from '@/services/api/user/hooks';
//_________________________________________________________________

//@Types
import { Route } from 'next';
import { ReactNode, UIEvent, SyntheticEvent } from 'react';
import { ISubmissionsByStateResult } from '@/services/api/advertisement/types';
import { useQueryClient } from '@tanstack/react-query';
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
//_________________________________________________________________

export function useApplicantList() {
  //Dependencies
  const QC = useQueryClient();
  const { setTutorialStatus } = useUserStore();
  const { push: navigateTo } = useRouter();
  const [isNavigating, startTransition] = useTransition();
  const pathName = usePathname();
  const params = useParams<{ positionId: string }>();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get('textSearch') || ''
  );

  const { advertisement } = useAdvertisementStore();
  const { user } = useUserStore();

  const [statusModal, setStatusModal] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>(
    searchParams.has('state') ? searchParams.get('state')! : 'Pending'
  );

  const { mutate: handleSetViewedTutorialMutate } = useSetViewedTutorial();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetApplicantList({
      advertisementId: params.positionId,
      state: selectedTab,
      textSearch: searchParams.get('textSearch') || '',
    });

  const tabs: { label: ReactNode }[] = useMemo(
    () =>
      tabsInfo?.map((tabInfo) => ({
        label: createTabLabel(
          tabInfo,
          data?.pages[0]?.submissionsByStateResult
        ),
      })),
    [isFetchingNextPage, data?.pages[0]?.submissionsByStateResult?.length]
  );

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
    handleSetViewedTutorialMutate(
      { viewedAdSubmissionTutorial: true },
      {
        onSuccess() {
          setStatusModal(false);
          QC.refetchQueries({ queryKey: ['get-user'] });
          setTutorialStatus({
            completedAdvertisementPageTutorial: true,
            completedSubmissionPageTutorial: false,
          });
        },
        onError() {
          setStatusModal(false);
        },
      }
    );
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

  //Debounce functionality for search
  useEffect(() => {
    const id = setTimeout(() => {
      handlePushSearchValue();
    }, 750);
    return () => clearTimeout(id);
  }, [searchValue]);

  //Checks for tutorial
  useEffect(() => {
    if (!user?.completedSubmissionPageTutorial) {
      setStatusModal(true);
    }
  }, [user?.completedAdvertisementPageTutorial]);

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

const tabsInfo = [
  { title: 'در انتظار بررسی', state: 'Pending' },
  { title: 'تایید شده', state: 'Accepted' },
  { title: 'رد شده', state: 'Rejected' },
];

const createTabLabel = (
  tabInfo: { title: string; state: string },
  submissions: ISubmissionsByStateResult[] | undefined
) => {
  const count =
    submissions?.find((item) => item.state === tabInfo?.state)?.count || 0;
  return (
    <Typography variant="caption1.bold" color="grey.15">
      {`${tabInfo?.title} (${count})`}
    </Typography>
  );
};
