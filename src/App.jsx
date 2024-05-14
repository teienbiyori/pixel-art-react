import '../src/styles/vivid.scss'
import PropTypes from 'prop-types';
import Header from './components/header.jsx'
import Pixel from './components/pixel.jsx';
import { useState } from 'react';


function Block( {children, title} ){
  //not working well, 
  const [expand, setExpand] = useState(false);
  const handleClick = () =>{
    const allGridItems = document.querySelectorAll(".block-wrapper");
    allGridItems.forEach(item => {
      item.classList.remove('expanded');
      setExpand(false);
    });
    setExpand(!expand);
  }
  return(<>
    <div className={expand? "block-wrapper expanded": "block-wrapper"}>
      <h3>{title}</h3><img src="./asmr.svg" alt="link" className="img-link" onClick={handleClick}/>
      <div className="content-wrapper">
        {expand && children}
      </div>
    </div>
  </>)
}

// Add prop type validation for the Block component
Block.propTypes = {
  children: PropTypes.node, // Validate children prop as a React node
  title: PropTypes.string,
};

function App() {

  return (
    <>
    <Header />
    <div className="main-wrapper">
      <Block title="Pixel Art Generator"><Pixel/></Block>
      <Block title="Others">im 2</Block>
      <Block title="Others">im 3</Block>
      <Block title="Others">im 4</Block>
      <Block title="Others">im 5</Block>
    </div>
    </>
  )
}

export default App
