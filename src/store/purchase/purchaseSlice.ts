import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface IPurchaseInfo {
  planId: string | undefined;
  userInfo: {
    firstName: string | undefined;
    lastName: string | undefined;
    companyName?: string | undefined;
    domain?: string | undefined;
    email?: string | undefined;
  };
  discountId: string | undefined;
  setPlan: (planId: string) => void;
  setDiscountId: (discountId: string) => void;
  setUserInfo: (userInfo: IPurchaseInfo['userInfo']) => void;
  reset: () => void;
}

const usePurchaseStore = create<IPurchaseInfo>()(
  devtools(
    persist(
      (set) => ({
        planId: undefined,
        discountId: undefined,
        userInfo: {
          firstName: undefined,
          lastName: undefined,
          companyName: undefined,
          domain: undefined,
          email: undefined,
        },
        setPlan: (planId) => {
          set(() => ({
            planId: planId,
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
