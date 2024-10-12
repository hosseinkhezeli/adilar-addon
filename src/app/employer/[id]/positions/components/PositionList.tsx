'use client';
import React, { Fragment } from 'react';
import usePositionList from '@/app/employer/[id]/positions/hooks/usePositionList';
import { Divider } from '@mui/material';
import { PositionCard } from '@/app/employer/[id]/positions/components/PositionCard';
import { CardList } from '@/app/components/Card';

type TPositionList = {
  id: string;
};

export function PositionList({ id }: TPositionList) {
  const { positionsMock, handleNavigation } = usePositionList({ id });
  return (
    <CardList>
      {positionsMock.map((position, idx, arr) => (
        <Fragment key={position.title + idx}>
          <PositionCard
            positionInfo={{ ...position }}
            onClick={handleNavigation}
          />
          {idx < arr.length - 1 && <Divider />}
        </Fragment>
      ))}
    </CardList>
  );
}
