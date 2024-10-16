import React from 'react';
import { AdilarLogo } from '@/app/components/AdilarLogo';
import { LoginCandidate } from '@/app/candidate/[positionId]/components/LoginCandidate';
import { PositionSubmissionFlow } from './components/PositionSubmissionFlow';
import { FormHeader } from './components/FormHeader';

type TParams = {
  params: { positionId: string };
  searchParams: { state: 'init' | 'logged-in' };
};

const Page = ({ params, searchParams }: TParams) => {
  return (
    <>
      {searchParams.state === 'init' ? (
        <>
          <AdilarLogo />
          <LoginCandidate positionId={params.positionId} />
        </>
      ) : searchParams.state === 'logged-in' ? (
        <>
          <FormHeader />
          <PositionSubmissionFlow />
        </>
      ) : (
        <>404</>
      )}
    </>
  );
};

export default Page;
