import React from "react"
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.content__newpost}>
            <div className={s.content__post}>
                <img src="https://wallarthd.com/wp-content/uploads/2015/05/relax-tiger-image.jpg" alt="avatar"/>
                <div className={s.text}>
                    {props.message}
                </div>
                <div className={s.like}>
                    <span>Like</span>
                </div>

            </div>
        </div>
    );
}
export default Post;