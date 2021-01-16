import React from "react";
import s from "./Navbar.module.css";

const Navbar = () =>{
    return(
        <nav className={s.nav}>
            <div className={s.nav__link}>Profile</div>
            <div className={s.nav__link}>Messages</div>
            <div className={s.nav__link}>News</div>
            <div className={s.nav__link}>Music</div>
            <div className={`${s.nav__link} ${s.active}`}>Settings</div>
        </nav>
    );
}
export default Navbar;