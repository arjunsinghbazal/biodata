import React from "react";
import Personal from "../Comp/About/Personal";
import Navbar from "../Comp/Common/NavBar/Index";
import Footer from "../Comp/Common/Footer";
import Foot from "../Comp/Common/Footer/option";
import Education from "../Comp/About/Education";
import ResumeViewer from "../Comp/About/Education/resume";
import MovingWord from "../Comp/Common/movingword";
import cv from "../pics/recv.pdf"
const About=()=>{
    return(
        <>
            <Navbar/>
            <Personal/>
            <Education/>
            <MovingWord word="About"/>
            <ResumeViewer pdfUrl={cv} />
            <div className="desktopFoot">
          <Footer />
        </div>
        <div className="mobFoot">
          <Foot className="mob-relative"/>
        </div>
        </>
    )
}


export default About;