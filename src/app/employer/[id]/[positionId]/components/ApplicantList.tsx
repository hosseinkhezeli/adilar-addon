'use client';
import React, { Fragment } from 'react';
import { Divider } from '@mui/material';
import { CardList } from '@/app/components/Card';
import { ApplicantCard } from '@/app/employer/[id]/[positionId]/components/ApplicantCard';
import { useApplicantList } from '@/app/employer/[id]/[positionId]/hooks/useApplicantList';

type TApplicantListProps = {
  id?: string;
  positionId?: string;
};

export function ApplicantList(params: TApplicantListProps) {
  const { applicantMock } = useApplicantList();
  return (
    <CardList>
      {applicantMock.map((applicant, idx, arr) => (
        <Fragment key={applicant.candidateId + idx}>
          <ApplicantCard {...applicant} />
          {idx < arr.length - 1 && <Divider />}
        </Fragment>
      ))}
    </CardList>
  );
}
