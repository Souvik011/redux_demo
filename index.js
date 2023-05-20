import {configureStore} from "@reduxjs/toolkit";

import UiReducer from "./UiReducer";
import CartReducer from "./CartReducer";

const store = configureStore({
    reducer: {ui: UiReducer , cart: CartReducer}
});

export default store;