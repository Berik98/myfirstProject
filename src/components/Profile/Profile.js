import React from "react"
import s from "./Profile.module.css";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
debugger;
        return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts post = {props.state.posts}/>
        </div>
    );
}
export default Profile;