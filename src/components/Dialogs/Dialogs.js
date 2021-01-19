import React from 'react';
import s from "./Dialogs.module.css";
import ss from "../button.module.css"

const Dialogs = (props) => {
    return (
        <div className={s.content}>
            <div className={s.users}>
                <div className={s.user}>Berik</div>
                <div className={s.user}>Serik</div>
                <div className={s.user}>Erik</div>
            </div>
            <div className={s.message}>
                <div className={s.message__text}>Message</div>
                <div className={s.message__send}>
                    <div className={s.message__area}>
                        <textarea className={s.message__textarea} placeholder="message"></textarea>
                    </div>
                    <div className={s.message__button}>
                        <button type="submit" className={ss.button}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;