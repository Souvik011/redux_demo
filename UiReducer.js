import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {isVisible : false , notification: null};

const UiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        toggle(state) {
          state.isVisible = !state.isVisible;
        },
        showNotification(state, action) {
          state.notification = {
            status: action.payload.state,
            title: action.payload.title,
            message: action.payload.message,
          };
        },
      },
});

export const UiActions = UiSlice.actions;

export default UiSlice.reducer;