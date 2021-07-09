import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {addTodo, removeTodo, toggleTodo} from "../modules/todos";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";


const TodoContainer = () => {
    const todos = useSelector((state : RootState) => state.todos);
    const dispatch = useDispatch();

    const onInsert = (text : string) => {
        dispatch(addTodo(text));
    }

    const onToggle = (id : number) => {
        dispatch(toggleTodo(id));
    }

    const onRemove = (id : number) => {
        dispatch(removeTodo(id));
    }

    return (
        <>
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
            <TodoInsert onInsert={onInsert}/>
        </>
    )
}

export default TodoContainer;