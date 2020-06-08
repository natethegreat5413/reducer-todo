import React, { useReducer } from 'react'
import {reducer, initialState} from '../Reducers/Reducer'
import Todo from "./Todo"
import TodoForm from "./TodoForm";

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            {state.todos.map(todo => {
                return <Todo todo={todo} key={todo.id} dispatch={dispatch}/>
            })}
            <TodoForm dispatch={dispatch} />
        </div>
    )
}

export default TodoList