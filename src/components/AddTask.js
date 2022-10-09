import {useState} from "react"
import { useTransition } from "react"
import "./compo.css"

const AddTask=({onAdd})=>{
    const [text,setText]=useState("")
    const [day,setDay]=useState("")
    const [reminder,setReminder]=useState(false)
    const[isPending,startTransition]=useTransition()

    const onSubmit=(e)=>{
        e.preventDefault();

        if(!text){
            alert("Please Add Task")
            return
        }


        onAdd({text, day, reminder})

        setText("")
        setDay("")
        setReminder(false)

    }

    return(
        <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>

        <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day & Time" value={day} onChange={(e)=>setDay(e.target.value)}/>
        </div>

        <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox"  
        checked={reminder}
        style={{border:"6px solid"}}
        value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" id="saved" value="SaveTask"/>
        {isPending&&<p>Hey</p>}
    </form>
    )
}

export default AddTask