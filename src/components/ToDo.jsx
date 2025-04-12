import React from 'react'

function ToDo(props) {
    const {task, toggleComplete, removeTask,editToDoForm} = props;
  return (
    <div className='Todo'>
        <p onClick={() => {toggleComplete(task.id)}} className={task.completed ? 'completed' : ''}>{task.task}</p>
        <div>
        <i onClick={() => {editToDoForm(task.id)}} className="fa-solid fa-pen-to-square edit-icon"></i>
        <i onClick={() => removeTask(task.id)} className="fa-solid fa-trash delete-icon"></i>
        </div>
    </div>
  )
}

export default ToDo
