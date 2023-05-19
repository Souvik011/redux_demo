import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {isVisible : false};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        toggle(state) {
            state.isVisible = !state.isVisible;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;