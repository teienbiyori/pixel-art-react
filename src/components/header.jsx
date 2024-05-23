import PropTypes from 'prop-types';

export default function Header({ time = new Date().toISOString() }){

  const formattedTime = new Date(time).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return(<>
  <div className="header-wrapper">
    <div className="logo-wrapper">
      <img src="./flower.svg" alt="logo"/>
      <h1>Colour Thread</h1>
      <h3>workshop</h3>
    </div>
    <div className="mode-wrapper">
      <span className="header-date">updated by {formattedTime}</span>
      <button className="mode-switch-btn tiny-btn">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
      </button>
    </div>
  </div>
  </>)
}

Header.propTypes = {
  time: PropTypes.string,
}