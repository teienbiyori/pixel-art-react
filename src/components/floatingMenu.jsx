import { useState } from "react"

export default function FloatMenu(){
  const [unfold, setUnfold] = useState(false);
  return(<>
    <div className="float-menu" style={unfold? {height: "10rem"}:{height: "4.5rem"}}>
      <img src="./asmr.svg" alt="rotate-open" className="menu-icon" 
      style={unfold? {transform: "rotate(45deg)"}:{transform: "rotate(0deg)"}} 
      onClick={()=>{setUnfold(!unfold)}}/>
      {unfold ? (<><div className="icon-list"><i className="fa-solid fa-up-long"></i><i className="fa-solid fa-paper-plane"></i></div></>):null}
    </div>
  </>)
}