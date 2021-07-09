import {useReducer} from "react";

type Color = 'RED' | 'BLUE' | 'BLACK';

type State = {
    count : number
    text : string
    color : Color
    isGood : boolean
};

type Action =
    { type : 'SET_COUNT'; count : number}
    | { type : 'SET_TEXT'; text : string}
    | { type : 'SET_COLOR'; color : Color}
    | { type : 'TOGGLE_GOOD'};

function reducer(state : State , action : Action) {
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


const ReducerSample = () => {
    const [state, dispatch] = useReducer(reducer,{
        count : 0,
        color : "RED",
        text : "hi",
        isGood : true
    })

    const setCount = () => dispatch({type : 'SET_COUNT' , count : state.count+1});
    const setText = () => dispatch({type : 'SET_TEXT', text : 'BYE'});
    const setColor = () => dispatch({type : 'SET_COLOR' , color : 'BLACK'});
    const onToggle = () => dispatch({type : 'TOGGLE_GOOD'});

    return (
        <>
            <h1>count : {state.count}</h1>
            <h1>text : {state.text}</h1>
            <h1>color : {state.color}</h1>
            <h1>isGOOD : {state.isGood ? 'TURE' : 'FALSE'}</h1>
            <div>
                <button onClick={setCount}>setCount</button>
                <button onClick={setText}>setText</button>
                <button onClick={setColor}>setColor</button>
                <button onClick={onToggle}>onToggle</button>
            </div>
        </>
    )
}

export default ReducerSample;