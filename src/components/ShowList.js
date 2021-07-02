import React from 'react';

const ShowList = ({toDoTask, removeTask, index}) => {
    return (
    <ul className="toDoList">
        {toDoTask.map((task, index) => {
            return (
                <li class="li" key={task.task}>
                    <h2>{task.task}</h2>
                    <input class="checkbox-button" type='checkbox' checked={toDoTask.completed}></input>
                    <button class="close" onClick={() => removeTask(index)}>x</button>
                </li>
            )
        })}
    </ul>
    )
}

export default ShowList;