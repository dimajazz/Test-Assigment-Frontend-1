import { ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/store.hook';
import { selectUsers } from 'store/usersSlice.store';
import { FILTER_KEYS } from 'constants/api.constants';
import filterUsersService from 'services/filter-users.service';
import {
    Filters,
    selectFilters,
    setFilters,
    resetFilters,
} from 'store/filtersSlice.store';

import 'components/users-table/users-table.styles.scss';

const UsersTable = () => {
    const users = useAppSelector(selectUsers);
    const filters = useAppSelector(selectFilters);
    const dispatch = useAppDispatch();

    const filteredUsers = filterUsersService(users, filters);
    const setFilter = (
        event: ChangeEvent<HTMLInputElement>,
        filterKey: keyof Filters
    ) => {
        event.preventDefault();
        const filterValue = event.target.value;
        dispatch(setFilters({ [filterKey]: filterValue }));
    };
    const resetAllFilters = () => {
        dispatch(resetFilters());
    };
    const resetFilter = (filterKey: keyof Filters) => {
        dispatch(setFilters({ [filterKey]: '' }));
    };
    return (
        <table className='users-table'>
            <thead>
                <tr>
                    {FILTER_KEYS.map((key) => (
                        <th key={key}>
                            <p className='cell-title'>{key}</p>
                            <div className='cell-filter'>
                                <input
                                    type='text'
                                    placeholder={`Filter by ${key}`}
                                    value={filters[key]}
                                    onChange={(e) => setFilter(e, key)}
                                />
                                <button
                                    type='button'
                                    onClick={() => resetFilter(key)}
                                    title='clear'
                                >
                                    &times;
                                </button>
                            </div>
                        </th>
                    ))}
                </tr>
                <tr>
                    <th colSpan={FILTER_KEYS.length}>
                        <button
                            type='button'
                            title='Reset all'
                            onClick={resetAllFilters}
                        >
                            Reset all
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {filteredUsers.map((user) => (
                    <tr key={user.id}>
                        {FILTER_KEYS.map((key) => (
                            <td key={`${user.id}${key}`}>{user[key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;
