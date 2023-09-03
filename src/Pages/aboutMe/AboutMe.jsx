import React from "react";
import "./aboutMe.css";

const AboutMe = () =>  {
    return (
        <>
        <div className="aboutMe">
            <div className="aboutMe_img">
                <img src="https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg?auto=webp&quality=85,70" alt="aboutMe-img" />
            </div>
            <div className="aboutMe_text">
                <p className="aboutMe_text-about">About</p>
                <h1 className="aboutMe_text-aboutMe">About Me</h1>
                <p className="aboutMe_text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>     
            </div>
        </div>
        </>
    )
}

export default AboutMe;
