//@3rd Party
import React from 'react';
//_______________________________________________________________

//@Components
import { LoginCandidate } from '@/app/candidate/[advertisementId]/components/LoginCandidate';
import { PositionSubmissionFlow } from './components/PositionSubmissionFlow';
import { FormHeader } from './components/FormHeader';
//_______________________________________________________________

//@Assets
import { AdilarLogo } from '@/app/components/AdilarLogo';
//_______________________________________________________________

//@Types
type TParams = {
  params: { advertisementId: string };
  searchParams: { state: 'init' | 'logged-in'; post_token: string | null };
};
//_______________________________________________________________

const Page = ({ params, searchParams }: TParams) => {
  return (
    <>
      {searchParams.state !== 'logged-in' ? (
        <>
          <AdilarLogo />
          <LoginCandidate advertisementId={params.advertisementId} />
        </>
      ) : (
        <>
          <FormHeader postToken={searchParams?.post_token} />
          <PositionSubmissionFlow />
        </>
      )}
    </>
  );
};

export default Page;
