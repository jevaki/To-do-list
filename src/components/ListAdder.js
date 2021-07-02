import React, { useState } from 'react';

const ListAdder = ({setToDoTask}) => {
    const [newTask, setNewTask] = useState('');

    return (
    <div class="NewTask" >
        <form onSubmit={(event) => {
            event.preventDefault();
            setToDoTask((currTasks) => {
                const newTasks = [...currTasks];
                newTasks.push({ task: newTask});
                return newTasks;
            })
        }}>
            <label htmlFor="new-task">New Task</label>
            <input id="new-task" value={newTask} onChange={(event) => setNewTask(event.target.value)}></input>
            <button class="Add-button">Add Task</button>
        </form>
    </div>
    );
}

export default ListAdder;