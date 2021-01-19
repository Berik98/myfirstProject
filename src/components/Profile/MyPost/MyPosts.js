import React from "react"
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import ss from "../../button.module.css";

const MyPosts = () => {
    return (
        <div>
            <div className={s.content__myposts}>
                <div className={s.content__text}>My posts</div>
                <div className={s.content__textarea}>
                    <textarea className={s.content__area} placeholder="your post..."></textarea>
                </div>
                <div className={s.content__button}>
                    <button type="submit" className={ss.button}>Send</button>
                </div>
            </div>
            <div className={s.content__text}> New posts</div>
            <Post message="It's my first project" />
            <Post message = "Good luck" />
        </div>
    );
}
export default MyPosts;