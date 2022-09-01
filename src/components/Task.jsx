import React from 'react';
import {CgClose} from 'react-icons/cg'

import './Task.css';

const Task = ({task, handleTaskClick,  handleTaskDeletin}) => {

    return (
        <div
            className='task-container'
            style={task.completed ? { borderLeft: "8px solid #614B1B"} : {}}
        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
				{task.title}
			</div>

            <div className='buttons-container'>
                <button className='remove-task-button' onClick={() => handleTaskDeletin(task.id) } >
                    <CgClose/>
                </button>
            </div>
        </div>
    )

   // return  <div className='task-container'> {task.title} </div> ;
}
 
export default Task;