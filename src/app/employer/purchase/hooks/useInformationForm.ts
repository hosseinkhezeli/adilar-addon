import usePurchaseStore from '@/store/purchase/purchaseSlice';
import { IUseFormInput } from 'ideep-design-system-2/components/input-list/type';
import { Route } from 'next';
import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { TStepperState } from '../types';

//@Types
type TInformationForm = {
  firstName: string;
  lastName: string;
  companyName: string;
  domain: string;
  email: string;
};

export function useInformationForm() {
  //URL
  const pathname = usePathname();
  const { push: navigateTo } = useRouter();
  const nextState: TStepperState = 'pre_invoice';
  const newSearchParams = new URLSearchParams({ state: nextState });
  //Form
  const form = useForm<TInformationForm>();
  const InformationFormInputList: IUseFormInput[] = [
    {
      name: 'firstName',
      label: 'نام',
      type: 'text',
      rules: {
        required: 'نام الزامی است',
      },
    },
    {
      name: 'lastName',
      label: 'نام خانوادگی',
      type: 'text',
      rules: {
        required: 'نام خانوادگی الزامی است',
      },
    },
    {
      name: 'companyName',
      label: 'نام شرکت',
      type: 'text',
    },
    {
      name: 'domain',
      label: 'دامنه',
      type: 'text',
    },
    {
      name: 'email',
      label: 'ایمیل',
      type: 'email',
    },
  ];

  const handleSubmitForm = (data: TInformationForm) => {
    //TODO add Api call then navigate to next state
    navigateTo(`${pathname}?${newSearchParams.toString()}` as Route);
  };

  return { form, InformationFormInputList, handleSubmitForm };
}
