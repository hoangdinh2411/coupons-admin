'use client';
import { signOut } from '@/services/auth.service';
import { UserData } from '@/types/auth.type';
import { CategoryData } from '@/types/category.type';
import { StoreData } from '@/types/store.type';
import { TopicData } from '@/types/topic.type';
import { createStore, useStore } from 'zustand';

export type StateAppStoredType = {
  appLoading: boolean;
  profile: UserData | null;
  categories: CategoryData[];
  stores: StoreData[];
  topics: TopicData[];
};

export type ActionAppStoredType = {
  toggleAppLoading: (loading: boolean) => void;
  setProfile: (profile: UserData | null) => void;
  setCategory: (categories: CategoryData[]) => void;
  setStores: (stores: StoreData[]) => void;
  setTopics: (topics: TopicData[]) => void;
  signOut: () => Promise<void>;
};

const initStore: StateAppStoredType = Object.seal({
  appLoading: false,
  profile: null,
  categories: [],
  stores: [],
  topics: [],
});

const AppStore = createStore<StateAppStoredType & ActionAppStoredType>()(
  (set) => ({
    ...initStore,
    toggleAppLoading: (loading: boolean) => set({ appLoading: loading }),
    setProfile: (profile: UserData | null) => set({ profile }),
    setCategory: (categories: CategoryData[]) => set({ categories }),
    setStores: (stores: StoreData[]) => set({ stores }),
    setTopics: (topics: TopicData[]) => set({ topics }),
    signOut: async () => {
      await signOut();
      set({ profile: null });
    },
  }),
);

const UseAppStore = <T>(
  selector: (state: StateAppStoredType & ActionAppStoredType) => T,
) => useStore(AppStore, selector);
export default UseAppStore;
