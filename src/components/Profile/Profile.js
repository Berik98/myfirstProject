import React from "react"
import s from "./Profile.module.css";
import MyPosts from "./MyPost/MyPosts";
import Post from "./MyPost/Post/Post";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.content__items}>
                <div className={s.content__cover}><img
                    src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701372504.jpg"
                    alt="cover"/>
                </div>
                <div className={s.content__avatar}>
                    <img src="https://wallarthd.com/wp-content/uploads/2015/05/relax-tiger-image.jpg" alt="avatar"/>
                </div>
                <div className={s.content__info}>
                    <div className={s.content__infoabout}><h1>Mobark Berik</h1></div>
                    <div className={s.content__infoabout}>Date of birth: 22 November</div>
                    <div className={s.content__infoabout}>City: Shalkar</div>
                    <div className={s.content__infoabout}>Education: ARU named after of Zhubanov</div>
                    <div className={s.content__infoabout}>Web Site: google.com</div>
                </div>
            </div>
            <MyPosts/>
        </div>
    );
}
export default Profile;