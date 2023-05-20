import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {isVisible : false};

const UiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        toggle(state) {
            state.isVisible = !state.isVisible;
        }
    }
});

export const UiActions = UiSlice.actions;

export default UiSlice.reducer;