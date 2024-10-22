'use client';
//@3rd Party
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
//___________________________________________________________

//@Hooks
import usePurchaseStore from '@/store/purchase/purchaseSlice';
import { useSendToPayment } from '@/services/api/finance/hooks';
//___________________________________________________________

//@Types
import { Route } from 'next';
//___________________________________________________________

export function usePreInvoices() {
  //Dependencies
  const { push: navigateTo } = useRouter();
  const { mutate: sendToPayment, isPending: isSubmitting } = useSendToPayment();
  // const [discount, setDiscount] = useState<number>(0);
  const [coupon, setCoupon] = useState<string>('');
  const { plan } = usePurchaseStore();

  const searchParams = useSearchParams();
  const advertisementId = searchParams?.get('advertisement_id');
  const taxPrice = (plan?.price || 0) * 0.09;
  const totalPrice = (plan?.price || 0) + taxPrice;
  // const totalPrice = (plan?.price || 0) + taxPrice - discount;

  const preInvoiceInfo = [
    {
      title: 'مبلغ افزونه',
      value: plan?.price,
    },
    {
      title: 'مالیات ارزش افزوده',
      value: taxPrice,
    },
    {
      title: 'تخفیف',
      value: '-',
    },
  ];

  //Handlers
  const onChangeDiscount = (coupon: string) => {
    setCoupon(coupon);
  };
  const onSubmitDiscount = () => {
    //TODO add submit discount coupon logic
    // console.log(coupon);
  };

  const onSubmitPayment = () => {
    sendToPayment(
      { advertisementId: advertisementId },
      {
        onSuccess: (data) => {
          enqueueSnackbar({
            variant: 'success',
            message: 'در حال انتقال به درگاه بانک',
          });
          navigateTo(data.url as Route);
        },
        onError: () => {
          enqueueSnackbar({
            variant: 'error',
            message: 'در روند ثبت اطلاعات خطایی رخ داد',
          });
        },
      }
    );
  };

  return {
    plan,
    taxPrice,
    // discount,
    totalPrice,
    onChangeDiscount,
    onSubmitDiscount,
    coupon,
    preInvoiceInfo,
    onSubmitPayment,
    isSubmitting,
  };
}
