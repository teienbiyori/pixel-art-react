function Category(){
  return(<>
    <div className="tag-wrapper">
      <button className="category-selector">feat</button>
      <button className="category-selector">fix</button>
      <button className="category-selector">refactor</button>
      <button className="category-selector">all</button>
    </div>
  </>)
}

function Task(){
  return(<>
    <div className="each-task">
      <span className="category">feat</span>
      <input type="text"/>
      <button className="task-complete">click</button>
      <span className="drag-icon">...</span>
    </div>
  </>)
}


//click on the 
export default function Tracker(){
  return(<>
  <div className="list-wrapper">
    <div className="typing-area">
      {/* drop-list */}
      <input type="text" className="task-input" />
      <button className="submit">drop icon</button>
    </div>
     <Category/>
    <div className="task-area">
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
    </div>
  </div>
  
  </>)
}