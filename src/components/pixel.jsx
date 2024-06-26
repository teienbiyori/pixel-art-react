import "../function/pixel.js"
import PropTypes from 'prop-types';

import { CirclePicker } from 'react-color';
import { useState, useRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import PixelRow from "./pixelRow.jsx";

//reset circlePicker color
const palette = ["#E35477","#EDA2BC", "#E0853A", "#ECCF54", "#B1BD43", "#529D46", "#64C3CE", "#1977B2", "#BEAAE4", "#C6B8A1", "#421E11", "#1F1D19"];

Slider.propTypes = {
  forWhat: PropTypes.string,
  label: PropTypes.string,
  rangeId: PropTypes.string,
  valueId: PropTypes.string,
  value: PropTypes.string,
  gridValue: PropTypes.string,
  setGridValue: PropTypes.func,
};
DrawingPanel.propTypes = {
  panelWidth: PropTypes.string,
  panelHeight: PropTypes.string,
  selectedColor: PropTypes.string,
  panelRef: PropTypes.shape({
    current: PropTypes.object
  })
};

function Slider({forWhat, label, rangeId, valueId, gridValue, setGridValue}){
  const handleVlueChange = (e) =>{
    setGridValue(e.target.value)
  }
  return(<>
    <div className="slider">
      <label htmlFor={forWhat}>{label}</label>
      <input type="range" id={rangeId} min="1" max="50" value={gridValue} onChange={handleVlueChange}/>
      <span id={valueId}>{gridValue}</span>
    </div>
  </>)
}

function DrawingPanel({panelWidth, panelHeight, selectedColor, panelRef}){
  const [canColorChange, setCanColorChange] = useState(false);

  const handleClick = () =>{
    setCanColorChange(!canColorChange);
  }

  let rows = []; //React allows rendering arrays of elements directly in JSX.
  for(let i = 0; i < Number(panelHeight); i++){
    rows.push(<PixelRow key={i} panelWidth={panelWidth} selectedColor={selectedColor} canColorChange={canColorChange} onClick={handleClick}/>)
  } 
  return(<>
    <div className="block-container" ref={panelRef}>
      {rows}
    </div>
  </>)
}

export default function Pixel(){
  const [height, setHeight] = useState("1");
  const [width, setWidth] = useState("1");
  const [selectedColor, setSelectedColor] = useState("#E35477");
  const [hideRange, setHideRange] = useState(false);
  const panelRef = useRef(null); 

  //panel
  const handleCreate = () =>{
    setHideRange(!hideRange);
    // original code using pure js 
    // blockContainer.innerHTML = ""
    // for(let i = 0; i < Number(width); i++){
    //   const row = document.createElement("div");
    //   row.classList.add("row-grid"); //outer div represent the whole row
    //   for(let j = 0; j < Number(height); j++){
    //     const col = document.createElement("div");
    //     col.classList.add("col-grid", "square"); //each div within the row
    //     row.appendChild(col); //set each col as sibilings within the parent row
    //   }
    //   blockContainer.appendChild(row); //add each row once a time
    // }
  }
  
  //picker
  const handleChangeColor = (e) =>{
    setSelectedColor(e.hex);
  }

  //camera
  const handleExportAsPNG = () => {
    if (panelRef.current) {
      exportComponentAsPNG(panelRef);
    }
  };


  return(
    <>
    <div className="options">
      {hideRange? "":(<div className="opt-wrapper">
        <Slider 
          forWhat="width-range" 
          label="Grid Width" 
          rangeId="width-range" 
          valueId="width-value"
          gridValue={width}
          setGridValue={setWidth} />
        <Slider 
          forWhat="height-range" 
          label="Grid Height" 
          rangeId="height-range" 
          valueId="height-value"
          gridValue={height}
          setGridValue={setHeight} />
      </div>)}
      <div className="opt-wrapper">
        <button onClick={handleCreate}>{hideRange? (<i className="fa-solid fa-rotate-left"></i>):"Start Drawing"}</button>
        <button onClick={()=>{setSelectedColor("#ffff")}}><i className="fa-solid fa-eraser"></i></button>
        <button onClick={handleExportAsPNG}><i className="fa-solid fa-camera"></i></button>
        <div className="picker-container">
          <CirclePicker circleSize={18} circleSpacing={10} width="80%" colors={palette} color={selectedColor} onChangeComplete={handleChangeColor}/>
        </div>
      </div>
    </div>
    {hideRange && 
      <DrawingPanel
      panelRef={panelRef} 
      panelWidth={width}
      panelHeight={height}
      selectedColor={selectedColor}/>}
    </>
  )
}