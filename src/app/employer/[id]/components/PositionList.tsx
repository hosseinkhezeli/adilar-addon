'use client';
import React, { Fragment } from 'react';
import usePositionList from '@/app/employer/[id]/hooks/usePositionList';
import { Box, Divider, styled } from '@mui/material';
import { PositionCard } from '@/app/employer/[id]/components/PositionCard';

type TPositionList = {
  id: string;
};

export function PositionList({ id }: TPositionList) {
  const { positionsMock } = usePositionList({ id });
  return (
    <List>
      {positionsMock.map((position, idx, arr) => (
        <Fragment key={position.title + idx}>
          <PositionCard {...position} />
          {idx < arr.length - 1 && <Divider />}
        </Fragment>
      ))}
    </List>
  );
}

const List = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});
