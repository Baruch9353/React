import { createSlice, isRejected } from "@reduxjs/toolkit";
import { fetchTerrorists } from "../api/fetchTerrorists";

const initialState = {
    terroristssList: [],
    loading: false,
    error: null,
}

export const terroristsSlice = createSlice({
    name: 'terroristsList',
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
                state.terroristssList = action.payload;
            })
            .addCase(fetchTerrorists.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })

    }
})

export default terroristsSlice.reducer;