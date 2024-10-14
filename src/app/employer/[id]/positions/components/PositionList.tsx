'use client';
import React, { Fragment } from 'react';
import usePositionList from '@/app/employer/[id]/positions/hooks/usePositionList';
import { Divider, Stack, Typography } from '@mui/material';
import { PositionCard } from '@/app/employer/[id]/positions/components/PositionCard';
import { CardList } from '@/app/components/Card';
import { SearchInput } from '@/app/components/SearchInput';

type TPositionList = {
  id: string;
};

export function PositionList({ id }: TPositionList) {
  const { positionsMock, handleNavigation } = usePositionList({ id });
  return (
    <Stack height="100%" overflow="auto">
      <Stack gap={3} py={2} bgcolor={'background.3'}>
        <Typography variant="body3.medium" color="text.16" textAlign="center">
          موقعیت های شغلی
        </Typography>
        <SearchInput
          placeholder="جستجو..."
          sx={{
            '& .MuiInputBase-root': {
              boxShadow: '0px 5px 16px 0px rgba(106, 118, 137, 0.10)',
              backgroundColor: 'common.white',
              borderRadius: 50,
            },
            'input::placeholder': {
              color: 'grey.15',
            },
          }}
        />
      </Stack>
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
    </Stack>
  );
}
