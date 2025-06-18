'use client';
import { createStore } from 'zustand';

export enum ROLES {
  ADMIN = 'ADMIN',
  OWNER = 'OWNER',
  USER = 'USER',
}

export type StateAppStoredType = {
  appLoading: boolean;
  isLoginSession: boolean;
  role: ROLES;
};

export type ActionAppStoredType = {
  toggleAppLoading: (loading: boolean) => void;
  switchLoginSession: (loginAction: boolean) => void;
};

const initStore: StateAppStoredType = Object.seal({
  appLoading: false,
  isLoginSession: false,
  role: ROLES.ADMIN,
});

const useAppStore = createStore<StateAppStoredType & ActionAppStoredType>()((set) => ({
  ...initStore,
  toggleAppLoading: (loading: boolean) => set({ appLoading: loading }),
  switchLoginSession: (loginAction: boolean) => set({ isLoginSession: loginAction }),
}));

export default useAppStore;
