import { useState } from "react";

export function Form({addTask}){
    const [userInput, setUserInput] = useState('');

    const handleSubmit = (event) => { /**Обробка відправки */
        setUserInput(event.currentTarget.value)
    }
    
    const handleChange = (event) => { /*обробка змін*/
        event.preventDefault()
        if(userInput.trim()){
           addTask(userInput);
           setUserInput('');
        }
       
    }

    return(
    <>
        <form className="container" onSubmit={handleChange}>
            <h2>Create task</h2>
            <h4>Enter title</h4>
            <input value={userInput} type="text" onChange={handleSubmit} placeholder="Do some stuff"/>
            <br/>
            <h4>Enter description</h4>
            <input 
                value={userInput}
                type="text"
                onChange={handleSubmit}
                placeholder="Write your thoughts here..."/>
                <br/>
            <button className="add">Add</button>
        </form>
    </>
    );
}