import { useEffect, useReducer, useRef, useState, useSyncExternalStore } from 'react';
import './App.css';
import { Form } from './Components/Form';
import { Task } from './Components/Task';

function App() {
  const [task, setTask] = useState([])

  const addTask = (userInput) => { /*додавання задачі*/
    if(userInput){
      const item = {
        id: task.length + 1,
        title: userInput,
        iscomplete: false,
      }
      setTask([...task, item])
    }
  }

  const removeTask = (id) => { /*видалення задачі*/
    setTask([...task.filter((task) => task.id !== id)])
  }

  const handleToggle = (id) =>{
    setTask([
      ...task.map((task) => task.id === id ? {...task, iscomplete: !task.iscomplete} : {...task}
      )
    ])
  } 

  return (
    <>
    <body>
      <div className='interactive'>
        <button className='btn'>ToDo</button>
        <br/>
        <button className='btn'>Settings</button>
      </div>

      <div className='tasks'>
        <h3>Quantity of tasks {task.length}</h3>
        <Form addTask = {addTask}/>
        {task.map((task) => {
          return(
            <Task
            task = {task}
            key = {task.id}
            toggleTask = {handleToggle}
            removeTask = {removeTask}
            />
          )
        })}
      </div>
    </body>
    </>
  );
}

export default App;
