import { createSlice } from "@reduxjs/toolkit";

import { fetchOrganizations } from "../api/fetchOrganizations";

const initialState = {
    organizationsList: [],
    allOrganizationsList: [],
    loading: false,
    error: null,
}

export const organizationSlice = createSlice({
    name: 'organizations',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrganizations.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOrganizations.fulfilled, (state, action) => {
                state.loading = false;
                state.organizationsList = action.payload;

                if (!action.meta.arg?.search) {
                    state.allOrganizationsList = action.payload;
                }
            })
            .addCase(fetchOrganizations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    }
})

export default organizationSlice.reducer;