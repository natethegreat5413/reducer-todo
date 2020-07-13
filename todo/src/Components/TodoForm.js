import React, {useState} from 'react'


export const TodoForm = props => {
    const [form, setForm] = useState('')

    const handleChanges = e => {
        setForm(e.target.value)
    }  
    
    const submitTodo = e => {
        e.preventDefault();
        props.addTodo(form)
        setForm('')
    }
    

    return(
        <div className='form'>
            <form onSubmit={submitTodo}>
                <input 
                    type='text'
                    value={form}
                    name='todo'
                    onChange={handleChanges}
                />
                <button>Add Task</button>
            </form>
        </div>
    )


}
