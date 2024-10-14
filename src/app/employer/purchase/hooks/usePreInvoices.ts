'use client';
//@3rd Party
import { useState } from 'react';
//___________________________________________________________

//@Hooks
import usePurchaseStore from '@/store/purchase/purchaseSlice';
//___________________________________________________________

export function usePreInvoices() {
  const { plan } = usePurchaseStore();
  const taxPrice = (plan?.price || 0) * 0.09;
  const [discount, setDiscount] = useState<number>(0);
  const [coupon, setCoupon] = useState<string>('');
  const totalPrice = (plan?.price || 0) + taxPrice - discount;

  const onChangeDiscount = (coupon: string) => {
    setCoupon(coupon);
  };
  const onSubmitDiscount = (coupon: string) => {
    console.log(coupon);
  };
  return {
    plan,
    taxPrice,
    discount,
    totalPrice,
    onChangeDiscount,
    onSubmitDiscount,
    coupon,
  };
}
