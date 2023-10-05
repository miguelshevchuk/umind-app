import { umindSlice } from './reducers/slice';


const actions = {
  umind: umindSlice.actions,
};

export { store, persistedStore, useAppSelector } from './store';
export { actions };
