import React from 'react';
import s from "./Messages.module.css";

const Messages = (props) => {
    return (
        <div className={s.message}>
            <img src = {props.avatar} alt = {props.id}/>
            <div className={s.message__text}>{props.message}</div>
        </div>
    )
}

export default Messages;