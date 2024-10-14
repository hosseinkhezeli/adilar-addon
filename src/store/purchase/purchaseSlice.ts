import { TPlanCard } from '@/app/employer/purchase/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface IPurchaseInfo {
  plan: TPlanCard['plan'] | undefined;
  userInfo: {
    firstName: string | undefined;
    lastName: string | undefined;
    companyName?: string | undefined;
    domain?: string | undefined;
    email?: string | undefined;
  };
  discountId: string | undefined;
  setPlan: (plan: TPlanCard['plan']) => void;
  setDiscountId: (discountId: string) => void;
  setUserInfo: (userInfo: IPurchaseInfo['userInfo']) => void;
  reset: () => void;
}

const usePurchaseStore = create<IPurchaseInfo>()(
  devtools(
    persist(
      (set) => ({
        plan: undefined,
        discountId: undefined,
        userInfo: {
          firstName: undefined,
          lastName: undefined,
          companyName: undefined,
          domain: undefined,
          email: undefined,
        },
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
        setUserInfo: (userInfo: IPurchaseInfo['userInfo']) => {
          set(() => ({
            userInfo: userInfo,
          }));
        },
        reset: () => {
          set(() => ({
            planId: undefined,
            discountId: undefined,
            userInfo: {
              firstName: undefined,
              lastName: undefined,
              companyName: undefined,
            },
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
