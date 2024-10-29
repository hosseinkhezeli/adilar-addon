'use client';
//@3rd Party
import React, { Fragment } from 'react';
//_____________________________________________________________________

//@Mui
import { Divider } from '@mui/material';
//_____________________________________________________________________

//@Components
import { PositionCard } from '@/app/employer/positions/components/PositionCard';
import { CardList } from '@/app/components/Card';
import { HeaderPositions } from '@/app/employer/positions/components/HeaderPositions';
import { SvgLoading } from '@/app/components/Loading';
//_____________________________________________________________________

//@Hooks
import usePositionList from '@/app/employer/positions/hooks/usePositionList';
//_____________________________________________________________________

export function PositionList() {
  const {
    searchValue,
    data,
    handleNavigation,
    handleSearch,
    handleFetchOnScroll,
    isNavigating,
  } = usePositionList();

  return (
    <>
      <HeaderPositions
        title="موقعیت های شغلی"
        value={searchValue}
        handleSearch={handleSearch}
      />
      <CardList
        sx={{
          pb: '75px',
          maxWidth: 560,
          width: '100%',
          margin: '0 auto',
        }}
        onScroll={handleFetchOnScroll}
      >
        {!data || isNavigating ? (
          <SvgLoading />
        ) : (
          data.pages.map((page, idx) => (
            <Fragment key={idx}>
              {page?.advertisements?.map((item, index, arr) => {
                return (
                  <Fragment key={item.id}>
                    <PositionCard
                      positionInfo={{
                        id: item.id,
                        title: item.title,
                        unreadCount: item.unreadSubmissionsCount,
                        createdAt: item.createdAt,
                        candidates: {
                          count: item.submissionsCount,
                        },
                        location: {
                          title: item.companyName,
                        },
                        lastCandidateSubmission: item.lastSubmissionDateTime,
                      }}
                      onClick={handleNavigation}
                    />
                    {idx < arr.length - 1 && <Divider />}
                  </Fragment>
                );
              })}
            </Fragment>
          ))
        )}
      </CardList>
    </>
  );
}
