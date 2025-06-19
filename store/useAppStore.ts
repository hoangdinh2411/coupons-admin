'use client';
import { UserData } from '@/types/auth.type';
import { CategoryData } from '@/types/category.type';
import { createStore, useStore } from 'zustand';

export type StateAppStoredType = {
  appLoading: boolean;
  profile: UserData | null;
  categories: CategoryData[];
};

export type ActionAppStoredType = {
  toggleAppLoading: (loading: boolean) => void;
  setProfile: (profile: UserData | null) => void;
  setCategory: (categories: CategoryData[]) => void;
};

const initStore: StateAppStoredType = Object.seal({
  appLoading: false,
  profile: null,
  categories: [],
});

const AppStore = createStore<StateAppStoredType & ActionAppStoredType>()(
  (set) => ({
    ...initStore,
    toggleAppLoading: (loading: boolean) => set({ appLoading: loading }),
    setProfile: (profile: UserData | null) => set({ profile }),
    setCategory: (categories: CategoryData[]) => set({ categories }),
  }),
);

const UseAppStore = <T>(
  selector: (state: StateAppStoredType & ActionAppStoredType) => T,
) => useStore(AppStore, selector);
export default UseAppStore;
