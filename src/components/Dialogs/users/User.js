import React from 'react';
import s from "./User.module.css";

const User = (props) => {
    return (
        <div className={s.user}>
            <div className={s.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={s.user__name}>{props.name}</div>
        </div>
    )
}
export default User;