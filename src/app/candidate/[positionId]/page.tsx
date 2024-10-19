//@3rd Party
import React from 'react';
//_______________________________________________________________

//@Components
import { LoginCandidate } from '@/app/candidate/[positionId]/components/LoginCandidate';
import { PositionSubmissionFlow } from './components/PositionSubmissionFlow';
import { FormHeader } from './components/FormHeader';
//_______________________________________________________________

//@Assets
import { AdilarLogo } from '@/app/components/AdilarLogo';
//_______________________________________________________________

//@Types
type TParams = {
  params: { positionId: string };
  searchParams: { state: 'init' | 'logged-in' };
};
//_______________________________________________________________

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
