import React from 'react';
import { ApplicantList } from '@/app/employer/[id]/[positionId]/components/ApplicantList';

type TPositionPageParams = {
  params: { id: string; positionId: string };
};

const Page = ({ params }: TPositionPageParams) => {
  return (
    <>
      <ApplicantList {...params} />
    </>
  );
};

export default Page;
