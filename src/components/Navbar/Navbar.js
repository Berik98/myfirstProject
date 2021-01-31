import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";


const   Navbar = (props) =>{
    let Friend = props.state.map((friend) =>
        (<Friends id = {friend.id} name={friend.name} avatar = {friend.avatar}/>));
    return(
        <nav className={s.nav}>
            <div className={s.nav__link}><NavLink  to="/profile" activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.nav__link}><NavLink  to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.nav__link}><NavLink  to="/news" activeClassName={s.active}>News</NavLink></div>
            <div className={s.nav__link}><NavLink  to="/music" activeClassName={s.active}>Music</NavLink></div>
            <div className={s.nav__link}><NavLink  to="/settings" activeClassName={s.active}>Settings</NavLink></div>
            <div className={s.nav__link }><NavLink to = '/friends' activeClassName = {s.active}>Friends</NavLink></div>
            <div className={s.friend}>{Friend}</div>
        </nav>
    );
}
export default Navbar;