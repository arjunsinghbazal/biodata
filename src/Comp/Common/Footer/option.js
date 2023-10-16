import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

function Foot({className}) {
  return (
    <div>
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 30 }}
        transition={{
          duration: 0.3,
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
      >
        <Link to={'https://github.com/arjunsinghbazal'} target='_blank' rel="noreferrer" className='foot-icon'>
          <GitHubIcon />
        </Link>
        <Link to={'https://www.linkedin.com/in/arjunsinghbazal'} target='_blank' rel="noreferrer" className='foot-icon' >
          <LinkedInIcon />
        </Link>
        <Link to={'https://www.instagram.com/arjunsinghbazal/'} target='_blank' rel="noreferrer" className='foot-icon' >
          <InstagramIcon />
        </Link>
      </motion.div>
    </div>
  )
}

export default Foot