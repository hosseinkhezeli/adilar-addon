import React from 'react';

const Page = ({ params }: { params: { id: string } }) => {
  return <div>Form Creator{params.id}</div>;
};

export default Page;
