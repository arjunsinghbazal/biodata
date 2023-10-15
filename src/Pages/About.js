import React from "react";
import Personal from "../Comp/About/Personal";
import Navbar from "../Comp/Common/NavBar/Index";
import Footer from "../Comp/Common/Footer";
import Foot from "../Comp/Common/Footer/option";
import Education from "../Comp/About/Education";
import ResumeViewer from "../Comp/About/Education/resume";
import cv from "../pics/recv.pdf"
const About=()=>{
    return(
        <>
            <Navbar/>
            <Personal/>
            <Education/>
            <ResumeViewer pdfUrl={cv} />
            <div className="desktopFoot">
          <Footer />
        </div>
        <div className="mobFoot">
          <Foot />
        </div>
        </>
    )
}


export default About;