'use client';
//@3rd Party
import { useForm } from 'react-hook-form';
import { usePathname, useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
//____________________________________________________

//@Hooks
import { useSubmitBasicInfo } from '@/services/api/employer/hooks';
//____________________________________________________

//@Types
import { IUseFormInput } from 'ideep-design-system-2/components/input-list/type';
import { Route } from 'next';
import { TStepperState } from '../types';
import { TSubmitBasicInfoBody } from '@/services/api/employer/types';
//____________________________________________________

export function useInformationForm() {
  const {
    mutate: submitBasicInfo,
    isPending: isSubmittingBasicInfo,
    isSuccess,
  } = useSubmitBasicInfo();
  //URL
  const pathname = usePathname();
  const { push: navigateTo } = useRouter();
  const nextState: TStepperState = 'pre_invoice';
  const newSearchParams = new URLSearchParams({ state: nextState });
  //Form
  const form = useForm<TSubmitBasicInfoBody>();
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
      name: 'companySlug',
      label: 'دامنه',
      type: 'text',
    },
    {
      name: 'email',
      label: 'ایمیل',
      type: 'email',
    },
  ];

  const handleSubmitForm = (data: TSubmitBasicInfoBody) => {
    submitBasicInfo(data, {
      onSuccess: (data) => {
        console.log(data);
        enqueueSnackbar({
          variant: 'success',
          message: 'ثبت با موفقیت انجام شد',
        });
        navigateTo(`${pathname}?${newSearchParams.toString()}` as Route);
      },
      onError: (error) => {
        console.log(error);
        enqueueSnackbar({
          message: 'اطلاعات با موفقیت ثبت نشد',
          variant: 'error',
        });
      },
    });
  };

  return {
    form,
    InformationFormInputList,
    handleSubmitForm,
    isSubmittingBasicInfo,
  };
}
