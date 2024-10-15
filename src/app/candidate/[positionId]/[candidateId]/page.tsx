//@3rd Party
import React from 'react';
//_______________________________________________________________

//@Components
import { FormHeader } from './components/FormHeader';
import { PositionSubmissionFlow } from './components/PositionSubmissionFlow';
//_______________________________________________________________

//@Types
type TProps = {
  params: { positionId: string; candidateId: string };
};
//_______________________________________________________________

const Page = ({ params }: TProps) => {
  return (
    <>
      <FormHeader />
      <PositionSubmissionFlow />
    </>
  );
};

export default Page;
