import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Add from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'

export const TodoForm = props => {
    const [task, setTask] = useState('')

    const handleChanges = e => {
        setTask(e.target.value)
    } 
    
    const submitTodo = e => {
        e.preventDefault();
        props.addTodo(task)
        setTask('')
    }
    

    return(
        <div className='form'>
            <form onSubmit={submitTodo}>
                <TextField 
                    type='text'
                    value={task}
                    name='todo'
                    onChange={handleChanges}
                    variant='outlined'
                />
                <Button color='primary' startIcon={<Add />} variant='contained'>Add Task</Button>
            </form>
        </div>
    )


}
