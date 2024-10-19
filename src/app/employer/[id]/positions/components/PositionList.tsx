'use client';
import React, { Fragment } from 'react';
import usePositionList from '@/app/employer/[id]/positions/hooks/usePositionList';
import { Divider } from '@mui/material';
import { PositionCard } from '@/app/employer/[id]/positions/components/PositionCard';
import { CardList } from '@/app/components/Card';
import { HeaderPositions } from '@/app/employer/[id]/positions/components/HeaderPositions';

type TPositionList = {
  id: string;
};

export function PositionList({ id }: TPositionList) {
  const {
    searchValue,
    data,
    handleNavigation,
    handleSearch,
    handleFetchOnScroll,
  } = usePositionList({
    id,
  });
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
        }}
        onScroll={handleFetchOnScroll}
      >
        {!data
          ? 'loading'
          : data.pages.map((page, idx) => (
              <Fragment key={idx}>
                {page?.advertisements?.map((item, index, arr) => {
                  return (
                    <>
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
                    </>
                  );
                })}
              </Fragment>
            ))}

        {/* {positionsMock.map((position, idx, arr) => (
          <Fragment key={position.title + idx}>
            <PositionCard
              positionInfo={{ ...position }}
              onClick={handleNavigation}
            />
            {idx < arr.length - 1 && <Divider />}
          </Fragment>
        ))} */}
      </CardList>
    </>
  );
}
