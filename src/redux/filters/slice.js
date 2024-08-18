import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        name: ''
    },
    reducers: {
        setSearch(state, action) {
            state.name = action.payload;
        }
    }
})

export const { setSearch } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;