import React from 'react'
import { Todo } from './Todo'

export const TodoList = props => {
    return(
        <div>
            {props.state.map((item) => {
                return <Todo 
                item={item} 
                key={item.id} 
                toggleTodo={props.toggleTodo} />
            })}
            <button onClick={props.clearCompleted}>Clear Task</button>
        </div>
    )
}
