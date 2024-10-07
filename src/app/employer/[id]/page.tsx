import React from 'react';

const Page = ({ params }: { params: { id: string } }) => {
  return <>{params.id}</>;
};

export default Page;
