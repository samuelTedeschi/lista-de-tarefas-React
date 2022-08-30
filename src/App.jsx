import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header'
import Tasks from './components/Tasks'
import "./App.css";
import AddTask from "./components/AddTask";

const App = () =>  {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programaçao',
      completed: false,

    },
    {
      id: '2',
      title:'ler livros',
      completed: true,
    }
  ])

  const handleTaskClick = (taskId) => {
      const newTasks = tasks.map((task) => {
        if (task.id === taskId) return { ... task, completed: !task.completed}

        return task;
      })

      setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ... tasks,
      { 
        title: taskTitle,
        id: uuidv4(),
        completed:false,
      }
    ]
    setTasks(newTasks)
  }

  const handleTaskDeletin = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId) 
    setTasks(newTasks)
  }

  return(
    <Router>

      <div className="container">
        <Header/>
              <>
                  <AddTask handleTaskAddition={handleTaskAddition}  />
                  <Tasks
                    tasks={tasks} 
                    handleTaskClick={handleTaskClick}  
                    handleTaskDeletin={handleTaskDeletin} 
                  />
              </>      
      </div>

    </Router>
  ) 
}

export default App;