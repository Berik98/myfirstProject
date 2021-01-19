import React from "react";
import s from "./Navbar.module.css";

const Navbar = () =>{
    return(
        <nav className={s.nav}>
            <div className={s.nav__link}><a className={s.a} href="/profile" >Profile</a></div>
            <div className={s.nav__link}><a className={s.a} href="/dialogs">Messages</a></div>
            <div className={s.nav__link}><a className={s.a} href="/news">News</a></div>
            <div className={s.nav__link}><a className={s.a} href="/music">Music</a></div>
            <div className={s.nav__link}><a className={s.a} href="/settings">Settings</a></div>
        </nav>
    );
}
export default Navbar;