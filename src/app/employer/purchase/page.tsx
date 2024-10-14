//@3rd Party
import React from 'react';
//____________________________________________________

//@Components
import { Plans } from './components/Plans/Plans';
import { InformationForm } from './components/Information/InformationForm';
//____________________________________________________

//@Types
import { TStepperState } from './types';
//____________________________________________________

const Page = ({ searchParams }: { searchParams: { state: TStepperState } }) => {
  const currentState = searchParams?.state;

  return (
    <>
      {currentState === 'plans' && <Plans />}
      {currentState === 'information' && <InformationForm />}
    </>
  );
};

export default Page;
