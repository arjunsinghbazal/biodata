import React from 'react'
import { motion} from "framer-motion";

import './styles.css'
import Details from './alter';



function Education() {
    return (<>
        <div className='eduContainer'>
            <motion.h2
                className='eduheading'>Education <span>.</span></motion.h2>
<Details
                classname={'ug'}
                university={'Pacific University, Udaipur Rj.'}
                course={"Bachelor's in Computer Science & Engineering"}
                duration={'2016-2020'}
            />
            <Details
                classname={'pg timeLine'}
                university={'GHS School Panthal Katra J&K'}
                course={"10+2 | PCM-Science"}
                duration={'2014-2016'}
            />
            
            <Details
                classname={'ug'}
                university={'Shinning Star High School Katra'}
                course={"Matrix | 10th"}
                duration={'2013-2014'}
            />
             
        </div>
        
      </>
   
    )
}

export default Education