import PropTypes from 'prop-types';
import { useState } from "react"

PixelBlock.propTypes = {
  selectedColor: PropTypes.string,
  canColorChange: PropTypes.bool,
  onClick: PropTypes.func,
}


export default function PixelBlock({selectedColor, canColorChange, onClick}){
  const [pixelColor, setPixelColor] = useState("#ffff");
  
  const applyColor = () =>{
    onClick();
  }

  const changeColorOnHover = () =>{
    setPixelColor(selectedColor);
  }
  return(<>
    <div className="col-grid square" style={{backgroundColor: pixelColor}} onClick={applyColor} onMouseEnter={canColorChange? changeColorOnHover: ""}></div>
  </>)
}