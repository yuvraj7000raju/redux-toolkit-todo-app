import { useDispatch, useSelector } from "react-redux"


import { removetodo , UpdateStatus } from "../redux-setup/sclice"
export default function Display(){

const data = useSelector(state => state.todos)
const dispatch = useDispatch()
const buttonStatus = useSelector(state => state.onUpdate)
    return(
        <div className="list">
            {
                data.map((task)=>{
                    return (
                        <div className="task-container" key={task.id}>
                         <div className="task-data">{task.task}</div>

<button className="update" onClick={()=> dispatch(UpdateStatus(task.id))
   } >update</button>



                         <button className="delete-btn" onClick={()=>{dispatch(removetodo(task.id))}} >delete</button>
                        </div>
                    )
                })
            }
            <span onClick={()=>console.log(data)}>console</span>
        </div>
    )
}