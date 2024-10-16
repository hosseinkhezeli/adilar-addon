import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Define the UserState interface
//TODO add user type
export interface UserState {
  token?: string; // Optional token
  user: any | null; // User can be IUser type or null
  isLoggedIn: boolean; // Boolean indicating login status
  loading: boolean; // Loading state for initialization
  setToken: (token?: string) => void; // Function to set the token
  setUserInfo: (user: any | null) => void; // Function to set user info
  setLogout: () => void; // Function to log out
  initialize: () => void; // Function to set loading to false
  reset: () => void; // Function to reset the store
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

export default useUserStore;
