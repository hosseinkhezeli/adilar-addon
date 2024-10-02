import React from 'react';
import { PositionList } from '@/app/employer/[id]/components/PositionList';

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <PositionList id={params.id} />
    </>
  );
};

export default Page;
