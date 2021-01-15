import React from "react";

const Navbar = () =>{
    return(
        <nav className="nav">
            <div className="nav__link">Profile</div>
            <div className="nav__link">Messages</div>
            <div className="nav__link">News</div>
            <div className="nav__link">Music</div>
            <div className="nav__link">Settings</div>
            <div className="nav__link">Game</div>
        </nav>
    );
}
export default Navbar;