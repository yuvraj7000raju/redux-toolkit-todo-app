// import { useSelector } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'
import { addlist , UpdateStatus, updatetask } from '../redux-setup/sclice'
import { useEffect, useState } from 'react'

console.log(typeof (addlist))


export default function Addlist() {
    const [task, settask] = useState("")
    const [edit, edittask] = useState(true)

    const dispatch = useDispatch()
    const buttonStatus = useSelector(state=>state.onUpdate )
    const data = useSelector(state => state.todos)
    if(buttonStatus){
       const result = data.find(task =>{
        return task.id === buttonStatus
       })
       if(task !== result.task && edit){
        edittask(false)
       settask(result.task)
       }
    }
    function addtask() {
        if(buttonStatus){
         dispatch(updatetask(task))
        }else{
        dispatch(addlist(task))
        }
        settask("")
    }
    // useEffect(()=>{

    // },buttonStatus)


    return (
        <div className="add" onClick={() => { console.log(data) }}>
            <input type="text" value={task} onChange={(e) => {
                settask(e.target.value)
                console.log("jj", task)
            }} />
            <button onClick={addtask}>{buttonStatus == null ? "add" : "update"}</button>
        </div>
    )
}