import React from "react"
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import ss from "../../button.module.css";


const MyPosts = (props) => {
         let postItem = props.post.map((item) =>
        (<Post message={item.post} id={item.id} likesCount={item.likesCount}/>)
    );
         let addNewPost = React.createRef();
         let addPost = () => {
             let text = addNewPost.current.value;
             alert(text);
         }
    return (
        <div>
            <div className={s.content__myposts}>
                <div className={s.content__text}>My posts</div>
                <div className={s.content__textarea}>
                    <textarea ref={addNewPost} className={s.content__area} placeholder="your post..."></textarea>
                </div>
                <div className={s.content__button}>
                    <button onClick={addPost} type="submit" className={ss.button}>Send</button>
                </div>
            </div>
            <div className={s.content__text}> New posts</div>
            {postItem}
        </div>
    );
}
export default MyPosts;