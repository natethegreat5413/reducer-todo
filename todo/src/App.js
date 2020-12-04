import React, { useReducer } from 'react';
import './App.css';
import { TodoList } from './Components/TodoList'
import { initialState, reducer } from './reducers/Reducer'
import { TodoForm } from './Components/TodoForm'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addTodo = task => {
    const newTodo = {
      todo: task,
      completed: false,
      id: Date.now()
    }
    dispatch({ type: 'ADD_TODO', payload: newTodo})
  }

  const toggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id })
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_TODO' })
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodo}/>
      </div>
        <TodoList 
        state={state}
        toggleTodo={toggleTodo} 
        clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;
