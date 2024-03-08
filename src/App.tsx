import { useEffect } from 'react';

import { GroupList } from './components/GroupList';
import { Filters } from './components/Filters';
import { fetchGroups } from './redux/slices/groupSlice';
import { useAppDispatch, useAppSelector } from './hooks';
import { useDebounce } from './hooks/useDebounce';

import './App.css';

function App() {
    const { filters, isLoading } = useAppSelector((state) => state.groupReducer);
    const dispatch = useAppDispatch();

    const debounceedFilters = useDebounce(filters, 1500);

    useEffect(() => {
        dispatch(fetchGroups(filters));
    }, [debounceedFilters]);

    return (
        <div>
            <Filters />
            {isLoading && 'Loading ...'}
            {!isLoading && <GroupList />}
        </div>
    );
}

export default App;
