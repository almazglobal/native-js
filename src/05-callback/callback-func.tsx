import React from 'react'

export const User = () => {
    const deleteTask = () => {
        alert('Task should be delete')
    }
    const saveTask = () => {
        alert('Task should be Save')
    }

    const changeTask = () => {
        console.log('change text')
    }
    return <div>
        <textarea onChange={changeTask}>Task</textarea>
        <div onClick={deleteTask}>delete</div>
        <div onClick={saveTask}>save</div>
    </div>
}