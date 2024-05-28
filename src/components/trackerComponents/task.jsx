import { useState } from "react"
import PropTypes from "prop-types"
import axios from "axios"

const baseURL = "http://localhost:3000";

Task.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  isDone: PropTypes.bool,
  id: PropTypes.string,
  setUpdateId: PropTypes.func,
}

export default function Task({category, title, isDone, id, setUpdateId}){
  const [done, setDone] = useState(isDone);
  const handleDone = () =>{
    axios.put(`${baseURL}/update/${id}`, {isDone:!done})
    .then(result => console.log(result))
    .catch(err => console.log("updating failed" + err))
    setDone(!done);
  }
  const handleDelete = () => {
    axios.delete(`${baseURL}/update/${id}`)
    .then(result => setUpdateId(result.data._id))
    .catch(err => console.log("deleting failed" + err))
  }
  return(<>
    <div className="each-task">
      <div className={`category category-${category}`}>{category}</div>
      <input type="text" value={title} readOnly={true}/>
      <button className="task-complete" onClick={handleDone}><i className={done? "fa-solid fa-square-check":"fa-regular fa-square-check"}></i></button>
      <button className="task-delete" onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></button>
      <span className="drag-icon"><i className="fa-solid fa-ellipsis-vertical"></i></span>
    </div>
  </>)
}