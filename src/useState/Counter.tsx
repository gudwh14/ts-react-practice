import {useState} from "react";

type User = {
    name : string;
    age : number;
}

const Counter = () => {
    const [count, setCount] = useState<number>(0); // useState 타입스크립트 사용 기본 , Generics 를 사용하여 타입 설정을 해준다
    // Generics 를 사용하지 않아도 useState Type 유추를 해준다.
    // const [count ,setCount] = useState(0);
    // null 값일수도 있고 아닐수도 았을때 Generics 활용합니다
    const [user, setUser] = useState<User | null>(null); // null 값을 사용할 수 있다.

    const onIncrease = () => setCount(count +1);
    const onDecrease = () => setCount(count-1);

    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </>
    );
}

export default Counter;