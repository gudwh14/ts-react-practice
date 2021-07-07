/*
    제너릭은 타입스크립트에서 함수 , 클래스 , interface , type alias 를 사용하게 될때
    여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법입니다.
 */

const Generics = () => {
    //  객채 A , 객채 B 를 합쳐주는 함수
    //  A,B 가 어떤 타입으로 올지 모르기 때문에 any 타입을 쓸수도 있습니다.
    //  하지만 any 를 사용하게 되면 타입유추가 깨진거나 다름이 없다.
    function merge(a : any , b : any) : any {
        return {
            ...a,
            ...b
        }
    }
    const merged = merge({foo : 1}, {boo : 2}); // merged 안에 무엇이 있는지 알 수 없음!
    // 이럴 때 Generics 를 사용!

    function genericsMerge<A,B>(a : A , b : B) : A & B {
        return {
            ...a,
            ...b
        }
    }
    // type : {a : number} & {b : number}
    const genericsMerged = genericsMerge({foo: 1}, {boo: 2});

    function wrap<T>(param : T){
        return {
            param
        }
    }

    // type : { param : number }
    const wrapped = wrap(10);

    /*
        interface 에서 사용하기
     */
    interface Items<T> {
        list : T[];
    }

    const items : Items<string> = {
        list : ['a','b','c']
    }

    /*
        type alias
     */
    type  Lists<T> = {
        list : T[];
    }
    const listItems : Lists<string> = {
        list : ['string', 'string']
    }

    class Queue<T> {
        list : T[] = [];

        getLength() {
            return this.list.length;
        }

        enqueue(item : T) {
            this.list.push(item);
        }

        dequeue() {
            return this.list.shift();
        }
    }
    
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    console.log(queue.getLength());
    console.log(queue.dequeue());
    console.log(queue.dequeue());
    console.log(queue.dequeue());
}

export default Generics;