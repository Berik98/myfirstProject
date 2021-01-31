import React from 'react';
import s from './Frineds.module.css';

const Friends = (props) => {
    return (
        <div className={s.friends}>
            <div className={s.friend}>
                <img src={props.avatar} alt="cover"/>
                <div className={s.friendsName}>{props.name}</div>
            </div>
        </div>
    )
}

export default Friends;