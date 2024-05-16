import '../src/styles/vivid.scss'
import PropTypes from 'prop-types';
import Header from './components/header.jsx'
import Pixel from './components/pixel.jsx';
import FloatMenu from './components/floatingMenu.jsx';
import { useState } from 'react';


function Block( {children, title} ){
  // //not working well, 
  // const [expand, setExpand] = useState(false);
  // const handleClick = () =>{
  //   const allGridItems = document.querySelectorAll(".block-wrapper");
  //   allGridItems.forEach(item => {
  //     item.classList.remove('expanded');
  //     setExpand(false);
  //   });
  //   setExpand(!expand);
  // }
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
      <Block title="Pixel Art Generator"><MenuImg onClick={handleUnfold} imgId="pixel-art"/></Block>
      <Block title="Others1"><MenuImg onClick={handleUnfold}/></Block>
      <Block title="Others2"><MenuImg onClick={handleUnfold}/></Block>
      <Block title="Others3"><MenuImg onClick={handleUnfold}/></Block>
      <Block title="Others4"><MenuImg onClick={handleUnfold}/></Block>
      <Block title="Pixel Art Generator">{unfold.includes("pixel-art")? <Pixel/>: ""}</Block>
    </div>
    </>
  )
}

export default App
