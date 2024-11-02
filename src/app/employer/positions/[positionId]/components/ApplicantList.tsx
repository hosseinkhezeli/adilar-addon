'use client';
import React, { Fragment } from 'react';
import { Box, Divider, styled } from '@mui/material';
import { CardList } from '@/app/components/Card';
import { useApplicantList } from '@/app/employer/positions/[positionId]/hooks/useApplicantList';
import { ApplicantCard } from '@/app/employer/positions/[positionId]/components/ApplicantCard';
import { HeaderPositions } from '@/app/employer/positions/components/HeaderPositions';
import { SwipeTutorial } from '@/app/components/SwipeTutorial';
import { CustomTabs } from '@/app/components/CustomTabs';
import { EmptyStateApplicantList } from '@/app/employer/positions/[positionId]/components/EmptyStateApplicantList';
import { SvgLoading } from '@/app/components/Loading';

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
    isNavigating,
    advertisement,
  } = useApplicantList();

  return (
    <>
      <HeaderPositions
        title={`رزومه های ${advertisement?.title || ''}`}
        value={searchValue}
        handleSearch={handleSearch}
      >
        <TabsContainer>
          <CustomTabs tabs={tabs} onChange={handleTabsFilter} />
        </TabsContainer>
      </HeaderPositions>

      <CardList
        sx={{
          overflowX: 'hidden',
          pb: '75px',
          maxWidth: 560,
          width: '100%',
          margin: '0 auto',
          filter: statusModal && data ? 'blur(3px)' : 'unset',
        }}
        onScroll={handleFetchOnScroll}
      >
        {!data || isNavigating ? (
          <SvgLoading />
        ) : data.pages[0].submissions.length === 0 ? (
          <EmptyStateApplicantList />
        ) : (
          data?.pages.map((page, idx) => (
            <Fragment key={idx}>
              {page?.submissions.map((applicant, index, arr) => {
                return (
                  <Fragment key={applicant.id}>
                    <ApplicantCard
                      applicantInfo={{
                        id: applicant?.id,
                        isReviewed: applicant?.isReviewed,
                        createdAt: applicant?.submissionDateTime,
                        candidate: {
                          fistName: applicant?.firstName || '-',
                          lastName: applicant?.lastName || '-',
                        },
                        onClick: () =>
                          handleNavigate({
                            id: applicant.id,
                          }),
                      }}
                    />
                    {idx < arr.length - 1 && <Divider />}
                  </Fragment>
                );
              })}
            </Fragment>
          ))
        )}
      </CardList>

      <SwipeTutorial
        open={statusModal}
        handleNextModal={handleCloseModal}
        hintText="با کشیدن کارت به چپ و راست میتوانید رزومه فرد را رد یا تائید کنید"
      />
    </>
  );
}

const TabsContainer = styled(Box)(() => ({
  padding: '0px 16px',
  maxWidth: 560,
  width: '100%',
  margin: '0 auto',
}));
