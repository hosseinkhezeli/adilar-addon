'use client';
import React, { Fragment } from 'react';
import { Divider } from '@mui/material';
import { CardList } from '@/app/components/Card';
import { useApplicantList } from '@/app/employer/[id]/positions/[positionId]/hooks/useApplicantList';
import { ApplicantCard } from '@/app/employer/[id]/positions/[positionId]/components/ApplicantCard';
import { HeaderPositions } from '@/app/employer/[id]/positions/components/HeaderPositions';

type TApplicantListProps = {
  id?: string;
  positionId: string;
};

export function ApplicantList(params: TApplicantListProps) {
  const { applicantMock, searchValue, handleSearch, handleNavigate } =
    useApplicantList();
  return (
    <>
      <HeaderPositions
        title="برنامه نویس فرانت اند"
        value={searchValue}
        handleSearch={handleSearch}
      />
      <CardList sx={{ overflowX: 'hidden' }}>
        {applicantMock.map((applicant, idx, arr) => (
          <Fragment key={applicant.candidateId + idx}>
            <ApplicantCard {...applicant} onClick={handleNavigate} />
            {idx < arr.length - 1 && <Divider />}
          </Fragment>
        ))}
      </CardList>
    </>
  );
}
