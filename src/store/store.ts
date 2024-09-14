import { configureStore } from '@reduxjs/toolkit';

import usersReducer from 'store/usersSlice.store';
import filtersReducer from 'store/filtersSlice.store';

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        users: usersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
