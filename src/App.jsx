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
      <FloatMenu/>
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
