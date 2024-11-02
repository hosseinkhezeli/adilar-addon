//@3rd Party
import React from 'react';
//____________________________________________________

//@Components
import { Plans } from './components/plan-section/Plans';
import { InformationForm } from './components/information-section/InformationForm';
import { PreInvoice } from './components/pre-invoice-section/PreInvoice';
import { Completed } from './components/completed-section/Completed';
//____________________________________________________

//@Types
import { TStepperState } from './types';

//____________________________________________________
const Page = ({ searchParams }: { searchParams: { state: TStepperState } }) => {
  const currentState = searchParams?.state;

  const renderComponent = () => {
    switch (currentState) {
      case 'plans':
        return <Plans />;

      case 'information':
        return <InformationForm />;

      case 'pre_invoice':
        return <PreInvoice />;

      case 'completed':
        return <Completed />;

      default:
        return <div>404 - Not Found</div>;
    }
  };

  return <>{renderComponent()}</>;
};

export default Page;
