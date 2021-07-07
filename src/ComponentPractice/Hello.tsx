import React from "react";

// type HelloProps = {
//     name : string;
//     msg : string;
// }

// React.FC 를 사용할때는 props 의 타입을 Generics 로 넣어서 사용합니다.
// React.FC 를 사용할때의 이점
// 1. props 에 기본적으로 children 이 포함되어있다.
// 2. 컴포넌트의 defaultProps, propTypes, contextTypes 를 설정 할 때 자동완성이 될 수 있다.
// 단점
// children 이 옵셔널 형태로 들어가있어서 컴포넌트의 props 타입이 명확하지 않다.
// 어떤 컴포넌트는 children 이 무저건 있어야 할 경우가 있고 , 어떤 컴포넌트는 children 이 들어가면 안도는 경우가 있다.
// 따라서 React.FC 에서 이러한 처리를 하기위해서는 Props 타입안에 children 설정을 해줘야 한다.
// defaultProps 가 제대로 작동하지 않는다.
type HelloProps = {
    name : string;
    msg : string;
    optional?: string; // 컴포넌트에서 있어도 되고 없어도되는 props 설정
    onClick : (name : string) => void; // 함수를 props 로 받아오기
    // children : React.ReactNode;
}

const Hello = ({name,msg,optional, onClick} : HelloProps) => {
    const handleClick = () => onClick(name);

    return (
        <div>
            {msg} {name}
            {optional && <p>{optional}</p>}
            <button onClick={handleClick}>클릭</button>
        </div>
    )
}
// defaultProps 를 설정해도 msg 값이 없다고 오류 발생!
// React.FC 를 생략하면 정상적으로 동작
Hello.defaultProps = {
    msg : "Default Props"
};

/*
    React.FC , React.VFC 를 사용할 것인가 ?
 */

export default Hello;