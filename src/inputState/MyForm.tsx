import React, {useState} from "react";

type MyFormProps = {
    onSubmit : (form : {name : string ; age : number}) => void;
}

const MyForm = ({onSubmit} : MyFormProps)  => {
    const [form , setForm] = useState({
        name : "",
        age : 0
    })

    const {name , age} = form; // 비구조화 할당

    // 객채의 타입 onChange 에 커서를 올리면 타입이 나온다.
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name , value} = e.target;
        setForm({
            ...form,
            [name] : value
        });
    }

    const handleSubmit = (e : React.FormEvent<Element>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name : '',
            age : 0
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='name' type='text' value={name} onChange={onChange}/>
                <input name='age' type='number' value={age} onChange={onChange}/>
                <button type='submit'>제출</button>
            </form>
        </div>
    )
}

export default MyForm;