import React from 'react';
import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div className={s.dialog}>
            <div className={s.avatar}>
                <img src={props.avatar}/>
            </div>
            <NavLink activeClassName={s.active} to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}
export default Dialog;