import React from 'react';

function Todo({ todo, dispatch }) {
    const handleChanges = id => {
        dispatch({
            type: "TOGGLE_COMPLETED",
            payload: id
        })
    }
    return(
        <div className={`todo ${todo.completed ? "completed" : ""}`}
        onClick={() => handleChanges(todo.id)}>
        <p>{todo.item}</p>
        </div>
    )
}

export default Todo