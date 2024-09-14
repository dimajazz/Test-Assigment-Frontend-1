import { useEffect } from 'react';

import './App.styles.scss';
import { useAppDispatch } from 'hooks/store.hook';
import { setUsers } from 'store/usersSlice.store';

import UsersTable from 'components/users-table/users-table.component';
import fetchUsersService from 'services/fetch-users.service';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetchUsersService().then((data) => dispatch(setUsers(data)));
    }, []);
    return <UsersTable />;
}

export default App;
