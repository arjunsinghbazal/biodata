import React from "react";
import './styles.css'
import { motion } from 'framer-motion';
import DraWer from "./Drawer";
import { Link} from "react-router-dom";
function Navbar() {
  const [isRotated, setIsRotated] = React.useState(false);

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };
    return (
      <div className='navbar'>
      {/*Logo with the name "CryptoTracker"*/}
      <Link to="/">
      <h1
  className={`logo ${isRotated ? 'rotate' : ''}`}
  onClick={toggleRotation}
>
  α૨
</h1>
        </Link>
      <div className='links'>
      <Link to="/about">
          <p className='link'>About</p>
        </Link>
        <Link to="/work">
          <p className='link'>Work</p>
        </Link>
        <Link to="/contact">
          <p className='link'>Contact</p>
        </Link>
      </div>
      <div className="mobile-drawer">
        {/* Mobile navigation drawer */}
        <DraWer/>
      </div>
    </div>)
  }
  
  export default Navbar