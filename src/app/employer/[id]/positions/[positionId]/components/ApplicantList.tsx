'use client';
import React, { Fragment } from 'react';
import { Box, Divider } from '@mui/material';
import { CardList } from '@/app/components/Card';
import { useApplicantList } from '@/app/employer/[id]/positions/[positionId]/hooks/useApplicantList';
import { ApplicantCard } from '@/app/employer/[id]/positions/[positionId]/components/ApplicantCard';
import { HeaderPositions } from '@/app/employer/[id]/positions/components/HeaderPositions';
import { SwipeTutorial } from '@/app/components/SwipeTutorial';
import { CustomTabs } from '@/app/components/CustomTabs';

export function ApplicantList() {
  const {
    searchValue,
    data,
    statusModal,
    tabs,
    handleSearch,
    handleNavigate,
    handleFetchOnScroll,
    handleCloseModal,
    handleTabsFilter,
  } = useApplicantList();

  return (
    <>
      <HeaderPositions
        title="برنامه نویس فرانت اند"
        value={searchValue}
        handleSearch={handleSearch}
      >
        <Box
          sx={{
            px: 4,
          }}
        >
          <CustomTabs tabs={tabs} onChange={handleTabsFilter} />
        </Box>
      </HeaderPositions>

      <CardList
        sx={{
          overflowX: 'hidden',
          pb: '75px',
          filter: statusModal && data ? 'blur(3px)' : 'unset',
        }}
        onScroll={handleFetchOnScroll}
      >
        {!data
          ? 'loading'
          : data?.pages.map((page, idx) => (
              <Fragment key={idx}>
                {page?.submissions.map((applicant, index, arr) => {
                  return (
                    <>
                      <ApplicantCard
                        key={index}
                        id={applicant?.id}
                        createdAt={applicant?.submissionDateTime}
                        candidate={{
                          fistName: applicant?.firstName || '-',
                          lastName: applicant?.lastName || '-',
                        }}
                        onClick={() =>
                          handleNavigate({
                            id: applicant.id,
                          })
                        }
                      />
                      {idx < arr.length - 1 && <Divider />}
                    </>
                  );
                })}
              </Fragment>
            ))}
      </CardList>

      <SwipeTutorial
        open={statusModal}
        handleNextModal={handleCloseModal}
        hintText="با کشیدن کارت به چپ و راست میتوانید رزومه فرد را رد یا تائید کنید"
      />
    </>
  );
}
