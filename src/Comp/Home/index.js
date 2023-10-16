import React from "react";
import { motion } from 'framer-motion'
import "./styles.css";
import EastIcon from '@mui/icons-material/East';

function Home() {
    return (
        <div className="homeContainer">
            <motion.p
                className="head"
                key={"head"}
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 0,
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
            ><span style={{ color: "var(--blue)" }}>Hey</span>, my name is</motion.p>
            <motion.div
                className="name"
                key={"name"}
               
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 30 }}
                transition={{
                    duration: 0.5,
                    delay: 0,
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
            >
                <h2>Arjun Singh</h2>
                <h2>Arjun Singh</h2>
            </motion.div>
            <motion.h3
                className="imTag"
                key={"intag"}
               
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: -30 }}
                transition={{
                    duration: 0.5,
                    delay: 0,
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
            >I design and construct for the web.</motion.h3>
            <motion.p
                className="aboutTag"
                key={"aboutTag"}
               
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 0,
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
            >
               I'm a <span>React </span>developer, specializing in 
               creating immersive and interactive web 
               experiences. My days and nights are devoted 
               to crafting projects and writing code to
                bring digital visions to life.
            </motion.p>
            <motion.a
            className="toAboutLink"
            key={"toAboutLink"}
           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.8,
                delay: 1,
                scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }}
            href='/about'>About Me <span style={{ color: "var(--blue)" }} className="arrowEast"> <EastIcon size='small' /></span></motion.a>

        </div>
    );
}

export default Home;