/*
    counter Module 를 Redux-Toolkit 를 이용해서 Refactor 해주기
 */

import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterState = {
    count : number
}

const initialState : CounterState = {
    count : 0
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increase(state : CounterState) {
            state.count = state.count + 1;
        },
        decrease(state : CounterState) {
            state.count = state.count - 1;
        },
        increaseBy(state : CounterState, action : PayloadAction<number>) {
            state.count = state.count + action.payload;
        }
    },
});

export default counterSlice.reducer;
export const {increase,decrease,increaseBy} = counterSlice.actions;