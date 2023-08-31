import React from "react";
import "./navbar.css"
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar_log">
                    <h1> My Protfolio </h1>
                </div>
                <div className="navbar_links">
                    <p>Home</p>
                    <p>Protfolio</p>
                    <p>About me </p>            
                </div>
                <div className="navbar_btn">
                    <button>Contact Me</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;