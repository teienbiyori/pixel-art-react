import PropTypes from "prop-types"

Category.propTypes = {
  setSort: PropTypes.func,
}

export default function Category({setSort}){
  const sortCategory = (e) =>{
    setSort(e.target.id)
  }
  return(<>
    <div className="tag-wrapper">
      <button id="feat" className="category-feat" onClick={sortCategory}>Feat</button>
      <button id="fix" className="category-fix" onClick={sortCategory}>Fix</button>
      <button id="refactor" className="category-refactor" onClick={sortCategory}>Refactor</button>
      <button id="other" className="category-other" onClick={sortCategory}>Other</button>
      <button id="" className="category-all" onClick={sortCategory}><i className="fa-solid fa-rotate-left"></i></button>
    </div>
  </>)
}