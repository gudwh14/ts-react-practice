import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {counterSlice} from "./counter";
import logger from "redux-logger";

export const storeRF = configureStore({
    reducer : {
        counterSlice : counterSlice.reducer
    },
    middleware : getDefaultMiddleware().concat(logger)
});

export type RootSateRF = ReturnType<typeof storeRF.getState>;