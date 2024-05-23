import '../src/styles/vivid.scss'
import PropTypes from 'prop-types';
import Header from './components/header.jsx'
import Pixel from './components/pixel.jsx';
import Tracker from './components/tracker.jsx';
import FloatMenu from './components/floatingMenu.jsx';
import { useState } from 'react';


function Block( {children, title} ){

  return(<>
    <div className="block-wrapper">
      <h3>{title}</h3>
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  </>)
}
Block.propTypes = {
  children: PropTypes.node, // Validate children prop as a React node
  title: PropTypes.string,
};

function MenuImg({onClick, imgId}){
  return(<>
    <div className="menu-img-container">
      <img src="kitten.png" alt="pixel-menu-link" className="menu-img" onClick={onClick} id={imgId}/>
    </div>
  </>)
}
MenuImg.propTypes = {
  onClick: PropTypes.func,
  imgId: PropTypes.string,
}

function App() {
  const [unfold, setUnfold] = useState([]);
  const handleUnfold = (e) =>{
    if(unfold.includes(e.target.id)){
      setUnfold([])
    }else{
      setUnfold([e.target.id]);
    }
  }
  return (
    <>
    <Header />
    <div className="main-wrapper">
      <FloatMenu/>
      <div className="slider-wrapper">
        <MenuImg onClick={handleUnfold} imgId="pixel-art"/>
        <MenuImg onClick={handleUnfold} imgId="task-tracker"/>
        <MenuImg onClick={handleUnfold} imgId="pixel-art"/>
      </div>
      <div className="collection-wrapper">
        <Block title="Pixel Art Generator">{unfold.includes("pixel-art")? <Pixel/>: ""}</Block>
        <Block title="Task Tracker">{unfold.includes("task-tracker")? <Tracker/>: ""}</Block>
        <Block title="Others2"></Block>
      </div>
    </div>
    </>
  )
}

export default App
