import {configureStore} from '@reduxjs/toolkit';
import reducer from './Reducers';
import dataSource from './middlewares/DataSource';

export type RootState = ReturnType<typeof reducer>;

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(dataSource),
});

export default store;
