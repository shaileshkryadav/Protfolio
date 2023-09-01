import React from "react";
import "./mySkillCard.css";

const MySkillCard = (prop) => {
    return(
    <>
     <div className="mySkillCard">
        <div className="mySkillCard_img">
            <img src={prop.img} alt="no-log" />
        </div>
        <div className="mySkillCard_title">
            <h1>{prop.title}</h1>
            <p>{prop.des}</p>
        </div>
     </div>
    </>
    )
}

export default MySkillCard;