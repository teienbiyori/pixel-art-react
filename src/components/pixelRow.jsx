import PropTypes from 'prop-types';
import PixelBlock from './pixelBlock';

PixelRow.propTypes = {
  panelWidth: PropTypes.string,
  selectedColor: PropTypes.string,
}

export default function PixelRow({ panelWidth , selectedColor }){
  let cols = [];
  for(let i = 0; i < Number(panelWidth); i++){
    cols.push(<PixelBlock key={i} selectedColor={selectedColor}/>)
  }
  return(<>
    <div className="row-grid">
      {cols}
    </div>
  </>)
}

