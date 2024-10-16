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
    positionsMock,
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
        {data?.pages.map((page, idx, arr) => (
          <Fragment key={idx}>
            {page?.map((p, index, arr) => {
              const position = {
                id: '1',
                title: 'برنامه نویس فرانت',
                location: { title: 'دفتر مرکزی تهران' },
                createdAt: new Date(Date.now()),
                candidates: { count: 64 },
                lastCandidateSubmission: new Date(Date.now()),
                unreadCount: 4,
              };
              return (
                <>
                  <PositionCard
                    positionInfo={{ ...position }}
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
