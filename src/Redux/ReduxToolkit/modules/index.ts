import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {counterSlice} from "./counter";
import logger from "redux-logger";
import {todosSlice} from "./todos";
import {githubSlice} from "./github/githubSlice";

export const storeRF = configureStore({
    reducer : {
        counterSlice : counterSlice.reducer,
        todosSlice : todosSlice.reducer,
        githubSlice : githubSlice.reducer
    },
    middleware : getDefaultMiddleware().concat(logger)
});

export type RootSateRF = ReturnType<typeof storeRF.getState>;