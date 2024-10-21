'use client';
//@3rd Party
import { useForm } from 'react-hook-form';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
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
  const { mutate: submitBasicInfo, isPending: isSubmittingBasicInfo } =
    useSubmitBasicInfo();
  //URL Deps
  const pathname = usePathname();
  const { push: navigateTo } = useRouter();
  const nextState: TStepperState = 'pre_invoice';
  const searchParams = useSearchParams();
  const postToken = searchParams.get('post_token');
  const advertisementId = searchParams.get('advertisement_id');
  const newSearchParams = new URLSearchParams({
    state: nextState,
    advertisement_id: advertisementId || '404_advertisement_id',
    post_token: postToken || '404_post_token',
  });
  //Form deps
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
      props: {
        onChange: (e) => {
          const regex = /^[a-zA-Z]*$/;
          if (!regex.test(e.target.value)) {
            form.setError('companySlug', {
              message: 'فقط حروف انگلیسی تایپ کنید',
            });
            enqueueSnackbar({
              variant: 'error',
              message: 'فقط حروف انگلیسی تایپ کنید',
            });
          } else {
            form.clearErrors('companySlug');
            form?.register('companySlug').onChange(e);
          }
        },
      },
    },
    {
      name: 'email',
      label: 'ایمیل',
      type: 'email',
    },
  ];

  //Handlers
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
          message: 'در روند ثبت اطلاعات خطایی رخ داد',
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
