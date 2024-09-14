import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from 'store/store';

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export type UsersState = { value: User[] };

const initialState: UsersState = { value: [] };

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.value = action.payload;
        },
    },
});

export const { setUsers } = usersSlice.actions;
export const selectUsers = (state: RootState) => state.users.value;
export default usersSlice.reducer;
