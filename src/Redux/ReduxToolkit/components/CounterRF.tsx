
type CounterProps = {
    count : number;
    onIncrease : () => void;
    onDecrease : () => void;
    onIncreaseBy : (diff : number) => void;
}

const CounterRF = ({count,onIncrease,onDecrease,onIncreaseBy} : CounterProps) => {
    return (
        <>
            <h1>count : {count}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <button onClick={()=>onIncreaseBy(3)}>+3</button>
        </>
    )
}

export default CounterRF;