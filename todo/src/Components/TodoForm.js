import React, {useState} from 'react'



const TodoForm = props => {
    const [newTodo, setNewTodo] = useState("")

    const handleChanges = e => {
        setNewTodo(e.target.value);
    }

    const addTodo = e => {
        e.preventDefault();
        setNewTodo("");
        props.dispatch(
            {
                type: "ADD_TODO",
                payload: {item: newTodo, completed: false, id: Date.now()}
            }
        )
        setNewTodo("")
    }

    const clearCompleted = e => {
        e.preventDefault();
        props.dispatch({ type: "CLEAR" })
    }

    return(
        <div>
            <form>
                <input 
                    className="todo-input"
                    type="text"
                    name="newtodotext"
                    value={newTodo}
                    onChange={handleChanges}
                />
                
            </form>

            <button onClick={addTodo}>Add Task</button>
            <button onClick={clearCompleted}>Clear Tasks</button>
        </div>
    )
}

export default TodoForm