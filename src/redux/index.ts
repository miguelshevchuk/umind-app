import { umindSlice } from './reducers/slice';


const actions = {
  umind: umindSlice.actions,
};

export { store, useAppSelector } from './store';
export { actions };
