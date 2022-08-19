import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick,  handleTaskDeletin}) => {
    
    return (
    <>
        {tasks.map(task => <Task task={task} handleTaskClick={handleTaskClick}  handleTaskDeletin={ handleTaskDeletin}/>)}
    </>
    )
}

export default Tasks;