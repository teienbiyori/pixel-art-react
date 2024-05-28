import { useEffect, useState } from "react"
import axios from "axios"
import TypingArea from "./typing"
import Category from "./category"
import Task from "./task"

const baseURL = "http://localhost:3000";

export default function Tracker(){
  const [taskData, setTaskData] = useState([])
  const [updateId, setUpdateId] = useState("")
  const [sort, setSort] = useState("")

  useEffect(()=>{
    axios.get(`${baseURL}/get`)
    .then(result => setTaskData(result.data))
    .catch(err => console.log("[failed getting data]" + err))
  },[updateId])

  return(<>
  <div className="list-wrapper">
    <TypingArea setUpdateId={setUpdateId}/>
    <Category setSort={setSort}/>
    <div className="task-area">
      {sort.length? 
      taskData.filter(eachTask => eachTask.category === sort).map((eachTask) =>(
      <Task 
      setUpdateId={setUpdateId}
      key={eachTask._id} 
      id={eachTask._id} 
      title={eachTask.title} 
      category={eachTask.category} 
      isDone={eachTask.isDone}/>)) : 
      taskData.map((eachTask)=>(
      <Task 
      setUpdateId={setUpdateId}
      key={eachTask._id} 
      id={eachTask._id} 
      title={eachTask.title} 
      category={eachTask.category} 
      isDone={eachTask.isDone}/>))}
    </div>
  </div>
  
  </>)
}