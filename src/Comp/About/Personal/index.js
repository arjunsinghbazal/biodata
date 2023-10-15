import React from "react";
import DP from "../../../pics/3 (1).png";
import { motion } from 'framer-motion'
import './styles.css'

function Personal() {
    return (
        <div className="detailsContainer">
            <motion.div
                className="imageContainer"
                key={"imgContainer"}

                initial={{ opacity: 0, x: -90 }}
                animate={{ opacity: 1, x: 0 }}
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
                <img className="imggg" src={DP} alt="Arjun" />
            </motion.div>
            <div className="aboutContainer">
                <motion.p className="aboutme"
                    key={"abtpara1"}
    
                    initial={{ opacity: 0, x: 90 }}
                    animate={{ opacity: 1, x: 0 }}
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
                "Hello! I'm Arjun Singh, a <span>React</span> developer, 
                <span>JavaScript</span> expert, and illustrator from India. 
                I enjoy creating things on the internet. I spend my 
                time turning code into interactive experiences."
                </motion.p>
                <motion.p className="aboutme"
                key={"abtpara2"}
                initial={{ opacity: 0, x:90 }}
                animate={{ opacity: 1, x:0 }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}>
                   I like things to be simple and in sync.
In my free time, whether I'm out in the open, trekking through <span>mountains</span>, or exploring wild places,
I discover the beauty of the natural world and capture its essence through my photography."
                </motion.p>

                <motion.p
                    className="aboutme"
                    key={"listPara"}
    
                    initial={{ opacity: 0, x: 90 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.4,
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                   Here are some of the technologies I've recently been using:
                </motion.p>
                <ul>
                    <motion.div
                        key={"list1"}
        
                        initial={{ opacity: 0, x: 90 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.6,
                            scale: {
                                type: "spring",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}
                    >
                        <li><span>JavaScript (ES6+)</span></li>
                        <li><span>React</span></li>
                    </motion.div>
                    <motion.div
                        key={"list2"}
        
                        initial={{ opacity: 0, x: 90 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.8,
                            scale: {
                                type: "spring",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}
                    >
                        <li><span>CSS</span></li>
                        <li><span>Nodejs</span></li>
                    </motion.div>
                </ul>
            </div>
        </div>
    );
}

export default Personal;