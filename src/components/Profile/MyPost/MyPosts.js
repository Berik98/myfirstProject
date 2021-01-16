import React from "react"
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={s.content__myposts}>
                <div className={s.content__text}>My posts</div>
                <div className={s.content__textarea}>
                    <textarea className={s.content__area} placeholder="your post..."></textarea>
                </div>
                <div className={s.content__button}>
                    <button>Send</button>
                </div>
            </div>
            <Post />
        </div>
    );
}
export default MyPosts;