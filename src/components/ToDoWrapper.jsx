import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import { v4 as uuidv4 } from 'uuid';
import ToDo from './ToDo';
import EditToDoForm from './EditToDoForm';
uuidv4();

function ToDoWrapper() {
    const [toDo, setToDo] = useState([])
    const addToDo = (valueInput) => {
        setToDo([...toDo, {
            id: uuidv4(),
            task: valueInput,
            completed: false,
            isEditing: false
        }])
    }
    const toggleComplete = (id) => {
        setToDo(toDo.map((todo) => {
            return (
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        }))
    }
    const removeTask = (id) => {
        setToDo(toDo.filter((todo) => {
            return !(todo.id === id)
        }))
    }
    const editToDoForm = (id) => {
        setToDo(toDo.map((todo) => {
            return (
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        }))
    }
    const editTask = (task, id) => {
        setToDo(toDo.map((todo) => {
            return todo.id === id
                ? { ...todo, task: task, isEditing: !todo.isEditing }
                : todo
        }))
    }
    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done!</h1>
            <ToDoForm addToDo={addToDo} />
            {toDo.map((todo, index) => {
                return todo.isEditing
                    ? (<EditToDoForm editTask={editTask} task={todo} key={index} />)
                    : (<ToDo task={todo} key={index}
                        toggleComplete={toggleComplete}
                        removeTask={removeTask} editToDoForm={editToDoForm} />)
            })}
        </div>
    )
}

export default ToDoWrapper

