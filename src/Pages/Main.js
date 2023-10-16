import React from "react";
import Navbar from "../Comp/Common/NavBar/Index";
import Foot from "../Comp/Common/Footer/option";
import Footer from "../Comp/Common/Footer";
import { motion } from "framer-motion"
import Home from "../Comp/Home";
import "../Pages/styles.css"
import MovingWord from "../Comp/Common/movingword";
const Main=()=>{
    return(
        <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="main"
      >
        <Navbar />
        <Home/>
        <MovingWord word="Home"/>
        <div className="desktopFoot">
          <Footer />
        </div>
        
        <div className="mobFoot">
          <Foot className="mob-fixed"/>
        </div>
      </motion.div>
    )
}

export default Main;