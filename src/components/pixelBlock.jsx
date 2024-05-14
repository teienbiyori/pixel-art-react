import { useState } from "react"

export default function PixelBlock(){
  const [pixelColor, setPixelColor] = useState("#ffff");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  return(<>
    <div className="col-grid square" style={{backgroundColor: pixelColor}}></div>
  </>)
}