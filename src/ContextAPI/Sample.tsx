import {useSampleDispatch, useSampleState} from "./SampleContext";

const Sample = () => {
    const state = useSampleState();
    const dispatch = useSampleDispatch();

    const setCount = () => dispatch({type : 'SET_COUNT' , count : state.count+1});
    const setText = () => dispatch({type : 'SET_TEXT', text : 'BYE'});
    const setColor = () => dispatch({type : 'SET_COLOR' , color : 'BLUE'});
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
    );
}

export default Sample;