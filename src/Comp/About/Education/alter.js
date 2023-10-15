import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Details({ classname, university, course, duration }) {
    const control = useAnimation();
 
    const boxVariant = {
        visible: { opacity: 1, y: 0 },
    
    }

  

    return (
        <motion.div
         
            variants={boxVariant}
            
            animate={control}
            className={classname}>
            <h3 className='university'>{university}</h3>
            <p>{course}</p>
            <p>{duration}</p>
        </motion.div>
    )
}

export default Details