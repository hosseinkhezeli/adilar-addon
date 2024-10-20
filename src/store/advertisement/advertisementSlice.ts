import { IAdvertisement } from '@/services/api/advertisement/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface IAdvertisementInfo {
  advertisement: IAdvertisement | undefined;
  setAdvertisement: (ad: IAdvertisement | undefined) => void;
}

const useAdvertisementStore = create<IAdvertisementInfo>()(
  devtools(
    persist(
      (set) => ({
        advertisement: undefined,
        setAdvertisement(ad) {
          set(() => ({
            advertisement: ad,
          }));
        },
      }),
      {
        name: 'advertisement-storage',
      }
    )
  )
);

export default useAdvertisementStore;
