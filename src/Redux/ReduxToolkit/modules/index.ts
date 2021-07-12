import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {counterSlice} from "./counter";
import logger from "redux-logger";
import {todosSlice} from "./todos";
import {githubSlice} from "./github/githubSlice";
import {githubSaga} from "./github/saga";
import {all} from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import ReactDOM from "react-dom";

const sagaMiddleware = createSagaMiddleware();

export const storeRF = configureStore({
    reducer : {
        counterSlice : counterSlice.reducer,
        todosSlice : todosSlice.reducer,
        githubSlice : githubSlice.reducer
    },
    middleware : getDefaultMiddleware().concat(sagaMiddleware).concat(logger)
});

sagaMiddleware.run(rootSaga);

export type RootSateRF = ReturnType<typeof storeRF.getState>;
export function* rootSaga() {
    yield all([githubSaga()]);
}