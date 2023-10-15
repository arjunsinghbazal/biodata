import React from "react";
import Navbar from "../Comp/Common/NavBar/Index";
import Footer from "../Comp/Common/Footer";
import Foot from "../Comp/Common/Footer/option";
import Work from "../Comp/Work";
import { motion } from "framer-motion";
import (".././App.css")
const Workin=()=>{
    return(
         <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="main"
      >
            <Navbar/>
            <Work/>
            <div className="desktopFoot">
          <Footer />
        </div>
        <div className="mobFoot">
          <Foot />
        </div></motion.div>
    )
}


export default Workin;