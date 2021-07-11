import {Todo} from "../modules/todos";
import TodoItem from "./TodoItem";

type TodoListProps = {
    todos : Todo[]
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

const TodoList = ({todos, onToggle, onRemove} : TodoListProps) : JSX.Element => {

    return (
        <ul>
            {todos.map((todo)=> {
                return (
                    <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove}/>
                )
            })}
        </ul>
    )
}

export default TodoList;