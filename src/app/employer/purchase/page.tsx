//@3rd Party
import React from 'react';
//____________________________________________________

//@Components
import { Plans } from './components/plan-section/Plans';
import { InformationForm } from './components/information-section/InformationForm';
//____________________________________________________

//@Types
import { TStepperState } from './types';
import { PreInvoice } from './components/pre-invoice-section/PreInvoice';
//____________________________________________________

const Page = ({ searchParams }: { searchParams: { state: TStepperState } }) => {
  const currentState = searchParams?.state;

  return (
    <>
      {currentState === 'plans' && <Plans />}
      {currentState === 'information' && <InformationForm />}
      {currentState === 'pre_invoice' && <PreInvoice />}
      {currentState !== 'plans' &&
        currentState !== 'information' &&
        currentState !== 'pre_invoice' &&
        '404'}
    </>
  );
};

export default Page;