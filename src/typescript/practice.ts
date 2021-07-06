import {type} from "os";

const practice = () => {
    let count = 0;
    count += 1;
    // count = "문자열 대입"; // type Error 발생

    const message: string = "Hi"; // 문자열
    const num: number = 1; // 숫자
    const done: boolean = true // 불리언

    const numbers: number[] = [1, 2, 3]; // 숫자 배열
    const messages: string[] = ['hello', 'world']; // 문자열 배열

    let mightBeUndefined: string | undefined = undefined; // string 일수도 undefined 일수도 있음.
    let nullableNumber: number | null = null; // number 일수도 null 일수도 있음

    let color: 'red' | 'blue' | 'green' = 'red'; // 'red' , 'blue' , 'green' 중 하나임
    color = 'blue';
    // color = 'black'; // 타입 오류

    // function 함수이름( 파라미터 : 타입 , 파라미터 : 타입 ) : 반환 타입 {}
    function sum(a : number, b : number) : number {
        return a + b;
    }

    // 타입 스크립트를 사용하면 내장 함수 사용시 타입 추론이 가능하다.
    function sumArray(array : number[]) : number {
        return array.reduce((acc, current)=> acc + current,0);
    }

    const total = sumArray([1,2,3,4]);

    // void 반환하기
    function returnVoid() : void {
        console.log("return void");
    }

    /*
        interface 사용하기
     */
    interface Shape {
        getArea () : number;
    }

    class Circle implements Shape {
        // radius : number 생략 가능!
        //constructor 의 파라미터 쪽에 public 또는 private accessor 를 사용하면 직접 하나하나 설정해주는 작업을 생략해줄 수 있습니다.
        constructor(public radius : number) {
            this.radius = radius;
        }

        getArea()  {
            return this.radius * this.radius * 3.14;
        }
    }

    const shapes : Shape[] = [new Circle(5), new Circle(3)];
    shapes.forEach(shapes => {
        console.log(shapes.getArea());
    })

    /*
        일반 객채를 interface 타입으로 설정하기
     */
    interface Person {
        name : string;
        age? : number; // ? 물음표는 설정을 해도 되고 안해도된다.
    }

    interface Develop {
        name : string;
        age? : number;
        skills : string[];
    }
    // extends 를 사용하여 상속
    interface Develop extends Person {
        skills : string[];
    }

    const person : Person = {
        name : '쪼',
        age : 25
    }

    const develop : Develop = {
        name : '쪼',
        age : 25,
        skills : ['react', 'java']
    }

    const people : Person[] = [person,develop];

    /*
        type alias 사용하기
        type 은 특정 타입에 별칭을 붙이는 용도로 사용합니다.
        이를 사용하여 객체를 위한 타입을 설정할 수도 있고, 배열, 또는 그 어떤 타입이던 별칭을 지어줄 수 있습니다.
     */

    type PersonType = {
        name : string;
        age ? : number;
    }

    // & 연산자는 Intersection 으로 두개 이상의 타입을 합칠때 사용합니다.
    type DevelopType = PersonType & {
        skills : string[];
    }

    const personType : PersonType = {
        name : 'JJo',
        age : 25
    }

    const developType : DevelopType = {
        name : personType.name,
        age : personType.age,
        skills : ['a','b']
    }

    type People = PersonType[];
    const people_ : People = [personType,developType];

    type Color = 'red' | 'blue';
    const color_ : Color = 'red';
    const colors : Color[] = ['red','blue'];
}

export default practice;