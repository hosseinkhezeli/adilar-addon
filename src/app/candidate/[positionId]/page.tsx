import React from 'react';
import { AdilarLogo } from '@/app/components/AdilarLogo';
import { LoginCandidate } from '@/app/candidate/[positionId]/components/LoginCandidate';

type TParams = {
  params: { positionId: string };
};

const Page = ({ params }: TParams) => {
  return (
    <>
      <AdilarLogo />
      <LoginCandidate positionId={params.positionId} />
    </>
  );
};

export default Page;
