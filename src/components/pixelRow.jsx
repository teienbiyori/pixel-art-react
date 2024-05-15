import PropTypes from 'prop-types';
import PixelBlock from './pixelBlock';

PixelRow.propTypes = {
  panelHeight: PropTypes.string,
  selectedColor: PropTypes.string,
}

export default function PixelRow({ panelHeight , selectedColor }){
  let cols = [];
  for(let i = 0; i < Number(panelHeight); i++){
    cols.push(<PixelBlock key={i} selectedColor={selectedColor}/>)
  }
  console.log(cols)
  return(<>
    <div className="row-grid">
      {cols}
    </div>
  </>)
}

