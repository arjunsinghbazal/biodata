import React, { useEffect, useState } from 'react'
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
export default function DraWer() {
     const [open, setOpen] = useState(false);
  // Styling for the outer circle of the animated cursor
  const style = {
    borderRadius: '50%',
    border: "2px solid rgb(76, 76, 220)",
    backgroundColor: 'none'
  };
  const backgroundStyle = {
    backgroundColor:'rgb(0, 26, 51)'
  };
  
  const whiteIconStyle = {
    color: 'white', // Set the color to white
  };
  return (
    <div className='drawer'>
      {/* IconButton to open the drawer when clicked */}
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" style={whiteIconStyle}/>
      </IconButton>
      {/* The Drawer component */}
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div" style={backgroundStyle}>
          {/* Links to various pages */}
          <Link to="/about">
          <p className='link'>About</p>
        </Link>
        <Link to="/work">
          <p className='link'>Work</p>
        </Link>
        <Link to="/contact">
          <p className='link'>Contact</p>
        </Link>
          {/* AnimatedCursor component for custom cursor */}
          <AnimatedCursor
            innerSize={9}
            outerSize={29}
            color="76, 76, 220"
            zIndex={9999999999}
            outerAlpha={0.3}
            innerScale={0.7}
            outerScale={1.5}
            outerStyle={style}
          />
        </div>
      </Drawer>
    </div>
  );
}