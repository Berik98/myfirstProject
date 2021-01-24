import React from 'react';
import s from "./../Dialogs.module.css";

const Messages = (props) => {
    return (
        <div className={s.message__text}>{props.message}</div>)
}

export default Messages;