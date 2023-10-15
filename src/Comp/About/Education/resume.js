import React from 'react';
import { motion } from "framer-motion";
import EastIcon from '@mui/icons-material/East';
import "./styles.css"
function ResumeViewer({ pdfUrl }) {
  const openPDF = () => {
    window.open(pdfUrl, '_blank'); // Open the PDF in a new tab/window
  };

  const downloadPDF = () => {
    // Fetch the PDF file as a blob
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Create an object URL for the blob
        const url = window.URL.createObjectURL(blob);

        // Create a temporary anchor element
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf'; // Specify the desired file name

        // Trigger a click event on the anchor to initiate the download
        a.click();
        // Revoke the object URL to free up resources
        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <div className='resumes'>
    
      <motion.a
            className="toAboutLink"
            key={"toAboutLink"}
            onClick={openPDF}
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
            > View Resume <span style={{ color: "var(--blue)" }} > <EastIcon  className="arrowEast" size='small' /></span></motion.a>
              <motion.a onClick={downloadPDF}
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
            > Download Resume <span style={{ color: "var(--blue)" }} > <EastIcon className="arrowEast" size='small' /></span></motion.a>
    </div>
  );
}

export default ResumeViewer;
