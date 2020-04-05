import { createContext, useContext } from 'react';

export class RootStore {
  constructor() {
    console.log('Root store created.');
  }
}

export const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = (): RootStore => useContext(StoreContext);
