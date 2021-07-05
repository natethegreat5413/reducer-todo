import React from 'react'
import { Todo } from './Todo'
import Button from '@material-ui/core/Button'
import Delete from '@material-ui/icons/Delete'

export const TodoList = props => {
    return(
        <div>
            {props.state.map((item) => {
                return <Todo 
                item={item} 
                key={item.id} 
                toggleTodo={props.toggleTodo} />
            })}
            <Button onClick={props.clearCompleted} variant='contained' color='secondary' startIcon={<Delete />}>Clear Task</Button>
        </div>
    )
}
