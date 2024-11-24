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
  searchParams: {
    state: 'init' | 'logged-in';
    post_token: string | null;
    phone_number: string | null;
  };
};
//_______________________________________________________________

const Page = ({ searchParams }: TParams) => {
  if (searchParams.state !== 'logged-in') {
    return (
      <>
        <AdilarLogo />
        <LoginCandidate phoneNumber={searchParams?.phone_number} />
      </>
    );
  } else {
    return (
      <>
        <FormHeader />
        <PositionSubmissionFlow />
      </>
    );
  }
};

export default Page;
