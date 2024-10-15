import { TPlanCard } from '@/app/employer/purchase/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface IPurchaseInfo {
  plan: TPlanCard['plan'] | undefined;
  discountId: string | undefined;
  postToken: string | undefined;
  advertisementId: string | undefined;
  setPlan: (plan: TPlanCard['plan']) => void;
  setDiscountId: (discountId: string) => void;
  setAdInfo: (postToken: string, advertisementId: string) => void;
  reset: () => void;
}

const usePurchaseStore = create<IPurchaseInfo>()(
  devtools(
    persist(
      (set) => ({
        plan: undefined,
        discountId: undefined,
        postToken: undefined,
        advertisementId: undefined,
        setPlan: (plan: TPlanCard['plan']) => {
          set(() => ({
            plan: plan,
          }));
        },
        setDiscountId: (discountId: string) => {
          set(() => ({
            discountId: discountId,
          }));
        },
        setAdInfo: (postToken: string, advertisementId: string) => {
          set(() => ({
            postToken: postToken,
            advertisementId: advertisementId,
          }));
        },
        reset: () => {
          set(() => ({
            planId: undefined,
            discountId: undefined,
          }));
        },
      }),
      {
        name: 'user-purchase-storage',
      }
    )
  )
);

export default usePurchaseStore;
