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
  const {
    applicantMock,
    searchValue,
    data,
    handleSearch,
    handleNavigate,
    handleFetchOnScroll,
  } = useApplicantList();
  return (
    <>
      <HeaderPositions
        title="برنامه نویس فرانت اند"
        value={searchValue}
        handleSearch={handleSearch}
      />
      <CardList
        sx={{ overflowX: 'hidden', pb: '75px' }}
        onScroll={handleFetchOnScroll}
      >
        {data?.pages.map((page, idx, arr) => (
          <Fragment key={idx}>
            {page?.map((applicant, index, arr) => {
              return (
                <>
                  <ApplicantCard
                    key={index}
                    id="1"
                    candidateId="2"
                    createdAt={'3213'}
                    candidate={{
                      fistName: 'سیما',
                      lastName: 'اشرفی',
                    }}
                    onClick={() =>
                      handleNavigate({
                        id: applicant.id,
                      })
                    }
                  />
                  {idx < arr.length - 1 && <Divider />}
                </>
              );
            })}
          </Fragment>
        ))}
      </CardList>
    </>
  );
}
