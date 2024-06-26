import { useState } from "react"

export default function FloatMenu(){
  const [unfold, setUnfold] = useState(false);
  const handleToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return(<>
    <div className="float-menu" style={unfold? {height: "10rem"}:{height: "4.5rem"}}>
      <img src="./asmr.svg" alt="rotate-open" className="menu-icon" 
      style={unfold? {transform: "rotate(45deg)"}:{transform: "rotate(0deg)"}} 
      onClick={()=>{setUnfold(!unfold)}}/>
      {unfold ? (<><div className="icon-list"><i className="fa-solid fa-chevron-up" onClick={handleToTop}></i><i className="fa-solid fa-paper-plane"></i></div></>):null}
    </div>
  </>)
}