import {useDispatch, useSelector} from "react-redux";
import CounterRF from "./CounterRF";
import {RootSateRF} from "../modules";
import {increase,decrease,increaseBy} from '../modules/counter';

const CounterContainerRF = () => {
    // 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.
    const count = useSelector((state : RootSateRF) => state.counterSlice.count);
    const dispatch = useDispatch();

    // 각 액션들을 디스패치하는 함수들을 만들어줍니다
    const onIncrease = () => {
        dispatch(increase());
    }

    const onDecrease = () => {
        dispatch(decrease());
    }

    const onIncreaseBy = (diff : number) => {
        dispatch(increaseBy(diff));
    }

    return (
        <CounterRF count={count} onIncrease={onIncrease} onDecrease={onDecrease} onIncreaseBy={onIncreaseBy}/>
    )
}

export default CounterContainerRF;