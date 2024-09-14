import { Filters } from 'store/filtersSlice.store';

export const USERS_DATA_URL = 'https://jsonplaceholder.typicode.com/users';
export const FILTER_KEYS: (keyof Filters)[] = [
    'name',
    'username',
    'email',
    'phone',
];
