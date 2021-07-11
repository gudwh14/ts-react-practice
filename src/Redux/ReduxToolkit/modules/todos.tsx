/*
    todos Redux-toolkit 으로 refactor 하기
 */

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
let nextId = 1;

export type Todo = {
    id : number
    text : string
    done : boolean
}

export type TodosState = Todo[];

const initialState : TodosState = [];

export const todosSlice = createSlice({
    name : 'todos',
    initialState : initialState,
    reducers : {
        addTodo(state : TodosState, action : PayloadAction<string>) {
            state.push({
                id : nextId++,
                text : action.payload,
                done : false
            });
        },
        removeTodo(state : TodosState, action : PayloadAction<number>) {
            state.filter((todo)=> todo.id !== action.payload);
        },
        toggleTodo(state : TodosState, action : PayloadAction<number>) {
            state.map((todo)=> {
                return todo.id === action.payload ? {...todo, done : !todo.done} : todo;
            })
        }
    }
})

export default todosSlice.reducer;
export const {addTodo, removeTodo, toggleTodo} = todosSlice.actions;