import React from 'react'
import Contacts from '../Contacts';
import Navbar from '../Comp/Common/NavBar/Index';
import Footer from '../Comp/Common/Footer';
import Foot from '../Comp/Common/Footer/option';
import { motion } from 'framer-motion'
import { ToastContainer } from 'react-toastify';
function Contact() {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />

     
      <Contacts />

      <div className="desktopFooter">
        <Footer />
      </div>
      <div className="mobFooter">
        <Foot />
      </div>
    </motion.div>
  )
}

export default Contact