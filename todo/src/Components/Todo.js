import React from 'react'

export const Todo = props => {
    return (
        <div>
            <h2 className={props.item.completed ? 'completed' : ''}
                onClick={(e) => {
                e.preventDefault()
                props.toggleTodo(props.item.id)}}> {props.item.todo} 
            </h2>
        </div>
    )
}
