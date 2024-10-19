import React, { SyntheticEvent } from 'react';
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
  const { push: navigateTo } = useRouter();
  const pathName = usePathname();
  const params = useParams<{ positionId: string }>();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState<string>();
  const [statusModal, setStatusModal] = useState<boolean>(true);
  const [selectedTab, setSelectedTab] = useState<string>(
    searchParams.has('state') ? searchParams.get('state')! : 'Pending'
  );

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetApplicantList({
      advertisementId: params.positionId,
      state: selectedTab,
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
    let applicantInfo;

    if (!data) {
      return null;
    } else {
      for (const page of data.pages) {
        applicantInfo = page.submissions.find(
          (submission) => submission.id == id
        );
      }
    }
    navigateTo(
      `${pathName}/${id}?isReviewed=${applicantInfo?.isReviewed}` as Route
    );
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

  return {
    searchValue,
    data,
    statusModal,
    tabs,
    handleSearch,
    handleNavigate,
    handleFetchOnScroll,
    handleCloseModal,
    handleTabsFilter,
  };
}