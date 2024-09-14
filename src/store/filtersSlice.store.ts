import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from 'store/store';
import type { User } from 'store/usersSlice.store';

export type Filters = Omit<User, 'id'>;

export type FiltersState = { value: Filters };

// Make each prop optional
export type FiltersProps = Partial<Pick<Filters, keyof Filters>>;

const initialState: FiltersState = {
    value: {
        name: '',
        username: '',
        email: '',
        phone: '',
    },
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<FiltersProps>) => {
            state.value = { ...state.value, ...action.payload };
        },
        resetFilters: (state) => (state = initialState),
    },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const selectFilters = (state: RootState) => state.filters.value;
export default filtersSlice.reducer;
