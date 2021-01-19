import React from 'react';
import s from "./Dialogs.module.css";
import ss from "../button.module.css"
import User from "./users/User";
import {BrowserRouter} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <BrowserRouter>
            <div className={s.content}>
                <div className={s.users}>
                    <User name = 'Berik' avatar = 'https://wallarthd.com/wp-content/uploads/2015/05/relax-tiger-image.jpg'/>
                    <User name = 'Serik' avatar = 'https://get.wallhere.com/photo/1600x1200-px-action-adventure-alien-aliens-Avatar-fantasy-fi-fighting-futuristic-sci-warrior-1635355.jpg'/>
                </div>
                <div className={s.message}>
                    <div className={s.message__text}>Message</div>
                    <div className={s.message__send}>
                        <div className={s.message__area}>
                            <textarea className={s.message__textarea} placeholder="Write a message"></textarea>
                        </div>
                        <div className={s.message__button}>
                            <button type="submit" className={ss.button}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default Dialogs;