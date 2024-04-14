import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const TodoList =()=>{
    const [tasks,setTasks]= useState(JSON.parse(localStorage.getItem('tasks')) || []);


useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(tasks));
},[tasks]);

const handleAddTask =() =>{
    const newTask =prompt('enter a new task :');
    if (newTask){
        setTasks([...tasks, {text:newTask,completed:false}]);
    }
};

const handleToggleTask =(index) =>{
    setTasks(
        tasks.map((task,i)=>
        i=== index ? {...task,completed: !task.completed}:task
    )
);
};

const handleRemoveTask = (index)=>{
    setTasks(tasks.filter((task,i)=> i !== index));
};

return (
    <div>
        <h1>Your  to do list </h1>
        <ul>
            {tasks.map((task,index)=>(
                <li key={index} style={{textdecoration :task.completed ? 'line-through':'none'}}>
                    <input  type="checkbox" checked={task.completed} onChange={()=> handleToggleTask(index)}
                    />
                    <span>{task.text}</span>
                    <button onClick={()=> handleRemoveTask(index)}>delete it  </button>
                    </li>   
            ))} 
        </ul>
        <button onClick={handleAddTask}>Add your a task </button>
    </div>
);
};

export default TodoList;