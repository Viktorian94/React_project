import { useEffect, useMemo, useReducer, useRef, useState, useSyncExternalStore } from 'react';
import './App.css';
import { Form } from './Components/Form';
import { Task } from './Components/Task';

function App() {
  const [task, setTask] = useState([])

  const tasksContent = useMemo(() => 
    task.map((task) => {
      return(
        <Task
        task = {task}
        key = {task.id}
        toggleTask = {handleToggle}
        removeTask = {removeTask}
        />
      )
  }), [task])

  /**
   * This function is adding new task to all tasks
   * @param {*} userInput user's input text
   */
  const addTask = (userInput) => {
    if(userInput){
      const item = {
        id: task.length + 1,
        title: userInput,
        iscomplete: false,
      }
      
      setTask(prev => [...prev, item])
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
        {tasksContent}
      </div>
    </body>
    </>
  );
}

export default App;
