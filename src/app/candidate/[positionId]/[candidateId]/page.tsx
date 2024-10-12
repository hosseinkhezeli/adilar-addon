import React from 'react';

type TProps = {
  params: { positionId: string; candidateId: string };
};

const Page = ({ params }: TProps) => {
  return (
    <div>
      Candidate Page for position {params?.positionId} as {params.candidateId}
    </div>
  );
};

export default Page;
