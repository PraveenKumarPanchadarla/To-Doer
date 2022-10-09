import './App.css';
import {useState} from "react"
import { useTransition } from "react"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const[isPending,startTransition]=useTransition()
  const[tasks,setTasks]=useState([
    {
      id:"1",
      text:"Sample Heading",
      day:"Date and Time will be displayed here.",
      reminder:"false"
    },
    {
      id:"2",
      text:"Finish Off Sherlock S1.",
      day:"Feb 21 at 2:21PM",
      reminder:"false"
    },
    {
      id:"3",
      text:"Double Click a Task",
      day:"To make it as a reminder.",
      reminder:"false"

    },
    {
      id:"4",
      text:"Click 'X' to remove a task  --->" ,
      day:"To make it as a reminder.",
      reminder:"false"
    }

  ])

    // Add task
    const addTask=(task)=>{
      const id= Math.floor(Math.random()*10000)+1
      const newTask ={id,...task}
      setTasks([...tasks,newTask])
    }




      //Delete
      const deleteTask=(id)=>{
        setTasks(tasks.filter((task)=> task.id!==id))
      }
      //Toggle
      const toggleReminder=(id)=>{
        setTasks(tasks.map((task)=> task.id===id
          ?{...task,reminder:!task.reminder}:task))
        }
  return (
    <div className="App">
    <div className="container">
    <header className="head">
    <h1>To-Doer</h1>
    <button 
    id="adder" 
    onClick={()=>setShowAddTask(!showAddTask)}
    style={{backgroundColor:showAddTask ? "red":"green"}}>{showAddTask ? "Close" : "Add"}</button>
    </header>
    { showAddTask &&
    <AddTask onAdd={addTask}/>}
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    {tasks.length===0 && <p style={{fontFamily:"consolas"}}>No Tasks to show.</p>}
    </div>
    </div>
  );
}

export default App;
