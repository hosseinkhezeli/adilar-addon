import { IUseFormInput } from 'ideep-design-system-2/components/input-list/type';
import { Route } from 'next';
import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { TStepperState } from '../types';
import { useSubmitBasicInfo } from '@/services/api/employer/hooks';
import { TSubmitBasicInfoBody } from '@/services/api/employer/types';
import { enqueueSnackbar } from 'notistack';
export function useInformationForm() {
  const { mutate: submitBasicInfo, isPending: isSubmittingBasicInfo } =
    useSubmitBasicInfo();
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
      onSuccess: () => {
        enqueueSnackbar({
          message: 'اطلاعات با موفقیت ثبت شد',
          variant: 'success',
        });
        navigateTo(`${pathname}?${newSearchParams.toString()}` as Route);
      },
      onError: (error) => {
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
