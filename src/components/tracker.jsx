import { useState } from "react"
import PropTypes from "prop-types"


Task.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
}

function TypingArea(){
  const [category, setCategory] = useState("feat")
  const [title, setTitle] = useState("")
  const handleCategory = (e) =>{
    setCategory(e.target.value);
  }
  const handleAdd = () => {
    //post title & category
    console.log(category + " , " + title)

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
      <input type="text" className="task-input" placeholder="Enter task" onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
      <button className="submit" onClick={handleAdd}><i className="fa-solid fa-square-plus"></i></button>
    </div>
  </>)
}

function Category(){
  return(<>
    <div className="tag-wrapper">
      <button className="category-selector">Feat</button>
      <button className="category-selector">Fix</button>
      <button className="category-selector">Refactor</button>
      <button className="category-selector">Other</button>
      <button className="category-selector"><i className="fa-solid fa-rotate-left"></i></button>
    </div>
  </>)
}

function Task({category, title}){
  const [done, setDone] = useState(false);
  const handleDone = () =>{
    setDone(!done);
  }
  return(<>
    <div className="each-task">
      <div className="category">{category}</div>
      <input type="text" value={title}/>
      <button className="task-complete" onClick={handleDone}><i className={done? "fa-solid fa-square-check":"fa-regular fa-square-check"}></i></button>
      <button className="task-delete"><i className="fa-solid fa-trash-can"></i></button>
      <span className="drag-icon"><i className="fa-solid fa-ellipsis-vertical"></i></span>
    </div>
  </>)
}


//click on the 
export default function Tracker(){
  return(<>
  <div className="list-wrapper">
    <TypingArea/>
    <Category/>
    <div className="task-area">
      <Task/>
    </div>
  </div>
  
  </>)
}