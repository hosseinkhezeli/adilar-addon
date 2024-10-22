import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TGetUserRes } from '@/services/api/user/types';

// Define the UserState interface
//TODO add user type
export interface UserState {
  token?: string;
  user: TGetUserRes | null;
  isLoggedIn: boolean;
  loading: boolean; // Loading state for initialization
  setToken: (token?: string) => void;
  setUserInfo: (user: TGetUserRes | null) => void;
  setLogout: () => void;
  initialize: () => void; // Function to set loading to false
  reset: () => void;
}

// Create the Zustand store
const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        token: undefined,
        user: null,
        isLoggedIn: false,
        loading: true,
        setToken: (token) => {
          set((state) => ({
            token: token,
            isLoggedIn: Boolean(token),
            loading: false,
          }));
        },
        setUserInfo: (user) => {
          set({ user });
        },
        setLogout: () => {
          set({
            user: null,
            token: undefined,
            isLoggedIn: false,
            loading: false,
          });
        },
        initialize: () => {
          set({ loading: false });
        },
        reset: () => {
          set({
            token: undefined,
            user: null,
            isLoggedIn: false,
            loading: false,
          });
        },
      }),
      {
        name: 'user-storage',
      }
    )
  )
);
export const { setToken } = useUserStore.getState();

export default useUserStore;
