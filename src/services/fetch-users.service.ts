import { FILTER_KEYS, USERS_DATA_URL } from 'constants/api.constants';
import { User } from 'store/usersSlice.store';

const fetchUsersService = async () => {
    try {
        const response = await fetch(USERS_DATA_URL);
        if (!response.ok) {
            throw new Error('Network response failed');
        }
        const data = await response.json();
        data.forEach((dataItem: User) => {
            if (!isDataTypeValid(dataItem)) {
                console.error('Data does not conform to type User');
                return;
            }
        });
        return data;
    } catch (error) {
        console.error('Data fetch operation failed: ', error);
    }
};

export default fetchUsersService;

const isDataTypeValid = (dataObj: any): dataObj is User => {
    if (typeof dataObj !== 'object' || dataObj === null) {
        return false;
    }

    const keys: (keyof User)[] = [...FILTER_KEYS];
    keys.push('id');

    return keys.every((key) => {
        const value = dataObj[key];
        if (key === 'id') {
            return typeof value === 'number';
        } else {
            return typeof value === 'string';
        }
    });
};
