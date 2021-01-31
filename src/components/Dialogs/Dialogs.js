import React from 'react';
import s from "./Dialogs.module.css";
import ss from "../button.module.css"
import Dialog from "./Users/Dialog";
import {BrowserRouter, NavLink} from "react-router-dom";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogs = props.state.dialogsData.map( (dialog) =>
        (<Dialog name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
    );
    let messages = props.state.messagesData.map((message) =>
        (<Messages message={message.message} id={message.id} avatar = {message.avatar}/>)
    );
    let sendNewMessage = React.createRef();
    let sendMessage = () => {
        let text = sendNewMessage.current.value;
        alert(text);
    }
    return (
        <BrowserRouter>
            <div className={s.content}>
                <div className={s.dialogs}>
                    {dialogs}
                </div>
                <div className={s.message}>
                    <div className={s.message__item}>
                        {messages}
                    </div>
                    <div className={s.message__send}>
                        <div className={s.message__area}>
                            <textarea ref={sendNewMessage} className={s.message__textarea} placeholder="Write a message"></textarea>
                        </div>
                        <div className={s.message__button}>
                            <button onClick={sendMessage} type="submit" className={ss.button}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default Dialogs;