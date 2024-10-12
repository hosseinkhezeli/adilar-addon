import React from 'react';
import { ApplicantList } from './components/ApplicantList';

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
