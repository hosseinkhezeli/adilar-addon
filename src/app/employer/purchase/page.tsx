//@3rd Party
import React from 'react';
//____________________________________________________

//@Components
import { Plans } from './components/plan-section/Plans';
import { InformationForm } from './components/information-section/InformationForm';
import { PreInvoice } from './components/pre-invoice-section/PreInvoice';
import { Completed } from './components/Completed';
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
      {currentState === 'pre_invoice' && <PreInvoice />}
      {currentState === 'completed' && <Completed />}
      {currentState !== 'plans' &&
        currentState !== 'information' &&
        currentState !== 'completed' &&
        currentState !== 'pre_invoice' &&
        currentState !== 'bank-portal' &&
        '404'}
    </>
  );
};

export default Page;
