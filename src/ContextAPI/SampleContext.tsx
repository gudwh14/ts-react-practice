import React, {useContext, useReducer} from "react";
/*
    필요한 타입 선언
 */

// Color 타입
import {createContext, Dispatch} from "react";

type Color = 'RED' | 'BLUE';

// State 타입
type State = {
    count : number
    text : string
    color : Color
    isGood : boolean
}

// Action 타입
type Action =
    {type : 'SET_COUNT' , count : number}
    | {type : 'SET_TEXT', text : string}
    | {type : 'SET_COLOR', color : Color}
    | {type : 'TOGGLE_GOOD'};

// 디스패치를 위한 타입
type SampleDispatch = Dispatch<Action>;

/*
    초기 상태 선언
 */
const initialState : State = {
    count : 0,
    text : "HI",
    color : "RED",
    isGood : true
}

/*
    Context 생성
 */
// Context 를 생성할때 초기값을 설정해주면 굳이 null 체크를 할 필요가 없다.
const SampleStateContext = createContext<State>(initialState);
const SampleDispatchContext = createContext<SampleDispatch>(()=>null);

/*
    리듀서 함수 생성
 */

function reducer(state : State, action : Action) : State {
    switch (action.type) {
        case "SET_COUNT":
            return {
                ...state,
                count : action.count
            }
        case "SET_TEXT":
            return {
                ...state,
                text : action.text
            }
        case "SET_COLOR":
            return {
                ...state,
                color : action.color
            }
        case "TOGGLE_GOOD":
            return {
                ...state,
                isGood : !state.isGood
            }
        default :
            throw new Error("Unhandled action")
    }
}

// SampleProvider 에서 useReducer 를 사용하고
// SampleStateContext.Provider 와 SampleDispatchContext.Provider 로 children 을 감싸서 반환합니다.
const SampleProvider = ({children} : {children : React.ReactNode}) => {
    const [state , dispatch] = useReducer(reducer,initialState);

    return (
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    )
};

/*
    Custom HOOK 을 만들어서 state , dispatch 쉽게 사용하기
    반환값 타입을 지정 해주면 null 체크를 할 필요가 없다.
 */

export function useSampleState() : State {
    return useContext(SampleStateContext);
}

export function useSampleDispatch() : SampleDispatch {
    return useContext(SampleDispatchContext);
}
export default SampleProvider;