import { FaTimes } from 'react-icons/fa'
import "./compo.css"
const Task=({task,onDelete,onToggle})=>{
  return(
    <div className={`task${task.reminder==true ? "reminder" : ""}`} onDoubleClick={()=>onToggle(task.id)}>
      <h3  className="named">{task.text} <FaTimes id="fad" style={{color:"red",cursor:"pointer"}} onClick={()=>onDelete(task.id)} /></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task