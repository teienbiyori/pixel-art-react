import PropTypes from 'prop-types';
import PixelBlock from './pixelBlock';

PixelRow.propTypes = {
  panelWidth: PropTypes.string,
  selectedColor: PropTypes.string,
  canColorChange: PropTypes.bool,
  onClick: PropTypes.func,
}

export default function PixelRow({ panelWidth , selectedColor, canColorChange, onClick }){
  let cols = [];
  for(let i = 0; i < Number(panelWidth); i++){
    cols.push(<PixelBlock key={i} selectedColor={selectedColor} canColorChange={canColorChange} onClick={onClick}/>)
  }
  return(<>
    <div className="row-grid">
      {cols}
    </div>
  </>)
}

