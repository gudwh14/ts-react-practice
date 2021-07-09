import {FormEvent, useState} from "react";

type TodoInsertProps = {
    onInsert : (text : string) => void;
}

const TodoInsert = ({onInsert} : TodoInsertProps) : JSX.Element => {
    const [text , setText] = useState<string>("");

    const onSubmit = (e : FormEvent) => {
        e.preventDefault();
        onInsert(text);
        setText("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='text' value={text} onChange={(event)=>{setText(event.target.value)}}/>
            <button type='submit'>추가</button>
        </form>
    )
}

export default TodoInsert;