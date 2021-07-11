import {useDispatch, useSelector} from "react-redux";
import {addTodo, removeTodo, toggleTodo} from "../modules/todos";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";
import {RootSateRF} from "../modules";


const TodoContainerRF = () => {
    const todos = useSelector((state : RootSateRF) => state.todosSlice);
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

export default TodoContainerRF;