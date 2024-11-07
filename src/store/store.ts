// FILL HERE 3.3
import { configureStore } from '@reduxjs/toolkit';
import changeAccess from './floorreducer';
import setRole from './Rolereducer';

export const store = configureStore({
  reducer: {
    floor: changeAccess, 
    rool : setRole, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;