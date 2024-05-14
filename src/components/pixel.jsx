import "../function/pixel.js"
import PropTypes from 'prop-types';
import { CirclePicker } from 'react-color';
import { useState } from "react";

function Slider({forWhat, label, rangeId, valueId, gridValue, setGridValue}){
  const handleVlueChange = (e) =>{
    setGridValue(e.target.value)
  }
  return(<>
    <div className="slider">
      <label htmlFor={forWhat}>{label}</label>
      <input type="range" id={rangeId} min="1" max="100" value={gridValue} onChange={handleVlueChange}/>
      <span id={valueId}>{gridValue}</span>
    </div>
  </>)
}

Slider.propTypes = {
  forWhat: PropTypes.string,
  label: PropTypes.string,
  rangeId: PropTypes.string,
  valueId: PropTypes.string,
  value: PropTypes.string,
  gridValue: PropTypes.string,
  setGridValue: PropTypes.func,
};

export default function Pixel(){
  const blockContainer = document.querySelector("#block-container")
  const [height, setHeight] = useState("1");
  const [width, setWidth] = useState("1");


  const handleCreate = () =>{
    blockContainer.innerHTML = ""
    for(let i = 0; i < Number(width); i++){
      const row = document.createElement("div");
      row.classList.add("row-grid"); //outer div represent the whole row
      for(let j = 0; j < Number(height); j++){
        const col = document.createElement("div");
        col.classList.add("col-grid", "square"); //each div within the row
        row.appendChild(col); //set each col as sibilings within the parent row
      }
      blockContainer.appendChild(row); //add each row once a time
    }
  }
  const handleClear = () =>{
    blockContainer.innerHTML = '';
  };
  return(
    <>
    <div className="options">
      <div className="opt-wrapper">
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
      </div>
      <div className="opt-wrapper">
        <button onClick={handleCreate}>Create Grid</button>
        <button onClick={handleClear}>Clear Grid</button>
        <CirclePicker circleSize={18} circleSpacing={10} width="20%"/>
        <button id="erase-btn">Erase</button>
        <button id="paint-btn">Paint</button>
      </div>
    </div>
    <div className="container" id="block-container">
    </div>
    </>
  )
}