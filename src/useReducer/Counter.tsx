/*
    useReducer 사용하기
    Action 타입 생성, 리듀서 생성 , 디스패쳐 생성
 */

import {useReducer} from "react";

// Action 타입 만들때 | 를 이용해서 나열하면 된다.
type Action = { type : 'INCREASE'} | { type : 'DECREASE'};

function reducer(state : number, action : Action) {
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default :
            throw new Error("Unhandled action");
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    const increase = () => dispatch({type : 'INCREASE'});
    const decrease = () => dispatch({type : 'DECREASE'});

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}

export default Counter;