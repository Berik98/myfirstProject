import React from "react";

const Navbar = () =>{
    return(
        <nav className="nav">
            <div className="nav__link"><a>Profile</a></div>
            <div className="nav__link"><a>Messages</a></div>
            <div className="nav__link"><a>News</a></div>
            <div className="nav__link"><a>Music</a></div>
            <div className="nav__link"><a>Settings</a></div>
        </nav>
    );
}
export default Navbar;