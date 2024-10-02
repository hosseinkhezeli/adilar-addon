'use client';
import React, { Fragment } from 'react';
import usePositionList from '@/app/employer/[id]/hooks/usePositionList';
import { Divider } from '@mui/material';
import { PositionCard } from '@/app/employer/[id]/components/PositionCard';
import { CardList } from '@/app/components/Card';

type TPositionList = {
  id: string;
};

export function PositionList({ id }: TPositionList) {
  const { positionsMock } = usePositionList({ id });
  return (
    <CardList>
      {positionsMock.map((position, idx, arr) => (
        <Fragment key={position.title + idx}>
          <PositionCard {...position} />
          {idx < arr.length - 1 && <Divider />}
        </Fragment>
      ))}
    </CardList>
  );
}
