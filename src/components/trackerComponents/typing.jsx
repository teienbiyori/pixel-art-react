import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types"

const baseURL = "http://localhost:3000";

TypingArea.propTypes = {
  setUpdateId: PropTypes.func,
}

export default function TypingArea({setUpdateId}){
  const [category, setCategory] = useState("feat")
  const [title, setTitle] = useState("")
  const handleCategory = (e) =>{
    setCategory(e.target.value);
  }
  const handleValue = (e) => {
    setTitle(e.target.value)
  }
  const handleAdd = () => {
    if(title.length === 0){
      return alert("type sth!!")
    }
    axios.post(`${baseURL}/add`, {title: title, category: category})
    .then(result => {
      setUpdateId(result.data._id);
    })
    .catch(err => console.log("posting failed: " + err))
  }
  return(<>
    <div className="typing-area">
      <div className="selector-wrapper">
        <select name="category" onChange={handleCategory}>
          <option value="feat">Feat</option>
          <option value="fix">Fix</option>
          <option value="refactor">Refactor</option>
          <option value="other">Other</option>
        </select>
      </div>
      <input type="text" className="task-input" placeholder="Enter task" onChange={handleValue} value={title}/>
      <button className="submit" onClick={handleAdd}><i className="fa-solid fa-square-plus"></i></button>
    </div>
  </>)
}