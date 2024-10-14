//@3rd Party
import React from 'react';
//____________________________________________________

//@Components
import { Plans } from './components/Plans';
import { TStepperState } from './types';
//____________________________________________________

const Page = ({ searchParams }: { searchParams: { state: TStepperState } }) => {
  const currentState = searchParams?.state;

  return <>{currentState === 'plans' && <Plans />}</>;
};

export default Page;
