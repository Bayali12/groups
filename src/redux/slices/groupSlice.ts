import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Filters, GetGroupsResponse, Group } from '../../types';
import { filterData } from '../../helpers/filterGroups';
import groups from '../../mock/groups.json';

interface GroupState {
    error: boolean;
    groups: Group[];
    filters: Filters;
    isLoading: boolean;
}

const initialState: GroupState = {
    error: false,
    groups: [],
    filters: {
        colorFilter: 'all',
        privacyFilter: 'all',
        friendsSubscribe: false,
    },
    isLoading: false,
};

export const fetchGroups = createAsyncThunk('groups/fetchGroups', async (filters: Filters) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response: GetGroupsResponse = {
        result: 1,
        data: groups,
    };
    if (response.result && response.data) {
        return {
            result: 1,
            data: filterData(response.data, filters),
        };
    } else {
        throw new Error('An error occurred while requesting groups');
    }
});

const groupSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        onChangefriendsSubscribe: (state, action) => {
            state.filters.friendsSubscribe = action.payload;
        },
        onChangeColor: (state, action) => {
            state.filters.colorFilter = action.payload;
        },
        onChangePrivacy: (state, action) => {
            state.filters.privacyFilter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGroups.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchGroups.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.groups = payload.data ?? [];
        });

        builder.addCase(fetchGroups.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        });
    },
});

export const groupReducer = groupSlice.reducer;
export const { onChangefriendsSubscribe, onChangeColor, onChangePrivacy } = groupSlice.actions;
