import React from 'react';
import { SearchInput } from '@/app/components/SearchInput';
import { PositionList } from '@/app/employer/[id]/components/PositionList';

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <SearchInput />
      <PositionList id={params.id} />
    </>
  );
};

export default Page;
