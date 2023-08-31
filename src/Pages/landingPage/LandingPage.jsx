import React from "react";
import "./landingpage.css";

const LandingPage = () => {
    return(
        <>
            <div className="landingPage">
                <div className="landingPage_container">
                    <div className="landingPage_text">
                        <div className="landingPage_text-into">
                            <p>Hey, I am Shailesh</p>
                        </div>
                        <div className="landingPage_text-des">
                            <h1> I am <span>Full Stack Developer</span></h1>
                            <h1>and Programmer</h1>
                        </div>
                        <div className="landingPage_text-des_more">
                            <p>I have completed 30+ project and worked in a team with more than 150 developer form all around the world.</p>
                        </div>
                        <div className="landingPage_text-btn">
                            <button>Get In Touch</button> 
                        </div>
                    </div>
                    <div className="landingPage_img">
                        <img src="https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg" alt="no-img-found" />
                    </div>
                </div>
            </div>    
        </>
    )
}

export default LandingPage;