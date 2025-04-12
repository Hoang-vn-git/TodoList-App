import React, { useState } from 'react'

function EditToDoForm({editTask, task}) {
    const [value, setValue] = useState(task.task)

    const handleInput = (e) => {
       setValue(e.target.value)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(value, task.id)
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" 
      value={value}
      className='todo-input' 
      onChange={(e) => {handleInput(e)}}/>
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditToDoForm
