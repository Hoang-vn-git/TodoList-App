import React, { useState } from 'react'

function ToDoForm(props) {
  const [value, setValue] = useState('')
  const { addToDo } = props;

  const handleInput = (e) => {
    setValue(e.target.value)
  }


  const handleSubmit = (e) => {
    if (value.trim() === '') {
      alert('Enter the task')
      return;
    }
    e.preventDefault();
    addToDo(value)
    setValue('')
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text"
        value={value}
        className='todo-input'
        placeholder='What is the task today?'
        onChange={handleInput} />
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default ToDoForm
