import { Filters } from 'store/filtersSlice.store';
import { User } from 'store/usersSlice.store';

const filterUsersService = (usersArray: User[], filters: Filters) => {
    return usersArray.filter((user) => {
        for (let key in filters) {
            const userPropValue = user[key as keyof User]
                .toString()
                .toLowerCase();
            const filterValue = filters[key as keyof Filters].toLowerCase();
            if (!userPropValue.includes(filterValue)) {
                return false;
            }
        }
        return true;
    });
};

export default filterUsersService;
