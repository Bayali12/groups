import { configureStore } from '@reduxjs/toolkit';

import { groupReducer } from './slices/groupSlice';

const store = configureStore({
    reducer: {
        groupReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
