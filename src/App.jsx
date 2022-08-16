import React, { useState } from "react";

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

  return(
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    
    </>
  ) 
}

export default App;