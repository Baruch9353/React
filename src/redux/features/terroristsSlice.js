import { createSlice, isRejected } from "@reduxjs/toolkit";
import { fetchTerrorists } from "../api/fetchTerrorists";

const initialState = {
    terroristsList: [],
    loading: false,
    error: null,
}

export const terroristsSlice = createSlice({
    name: 'terrorists',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTerrorists.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTerrorists.fulfilled, (state, action) => {
                state.loading = false;
                state.terroristsList = action.payload;
            })
            .addCase(fetchTerrorists.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    }
})

export default terroristsSlice.reducer;