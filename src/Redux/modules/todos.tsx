/*
    todos 리덕스 모듈 만들기

 */

// Action 타입 생성
const ADD_TODO = 'todos/ADD_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;

let nextId = 1; // 새로운 항목을 추가할 때 사용할 ID 값
// 액션 생성 함수 만들기
export const addTodo = (text : string) => ({
    type : ADD_TODO,
    payload : {
        id : nextId++,
        text
    }
})

export const removeTodo = (id : number) => ({
    type : REMOVE_TODO,
    payload : id
})

export const toggleTodo = (id : number) => ({
    type : TOGGLE_TODO,
    payload : id
})

// 타입 생성
type TodosAction =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof removeTodo>
    | ReturnType<typeof toggleTodo>

export type Todo = {
    id : number
    text : string
    done : boolean
}

export type TodosState = Todo[];

const initialState : TodosState = [];


// 리듀서 함수 생성
const todos = (state : TodosState = initialState, action : TodosAction) : TodosState => {
    switch (action.type) {
        case "todos/ADD_TODO":
            return state.concat({
                id : action.payload.id,
                text : action.payload.text,
                done : false
            });
        case "todos/REMOVE_TODO":
            return state.filter((todo)=> todo.id !== action.payload);
        case "todos/TOGGLE_TODO":
            return state.map((todo)=> {
                return todo.id === action.payload ? {...todo, done : !todo.done} : todo;
            })
        default :
            return state;
    }
}

export default todos;