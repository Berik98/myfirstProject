import React from "react"

const Profile = () =>{
    return(
        <div className="content">
            <div className="content__cover"><img
                src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701372504.jpg"/>
            </div>
            <div className="content__avatar">
                <img src="https://wallarthd.com/wp-content/uploads/2015/05/relax-tiger-image.jpg"/>
            </div>
            <div className="content__info">
                <div className="content__info_about"><h1>Mobark Berik</h1></div>
                <div className="content__info_about">Date of birth: 22 November</div>
                <div className="content__info_about">City: Shalkar</div>
                <div className="content__info_about">Education: ARU named after of Zhubanov</div>
                <div className="content__info_about">Web Site: google.com</div>
            </div>
            <div className="content__myposts">
                <div className="content__myposts_text">My posts</div>
                <div className="content__myposts_textarea">
                    <textarea className="content__myposts_area" placeholder="your post"></textarea>
                </div>
                <div className="content__myposts_button">
                    <button>Send</button>
                </div>
            </div>
            <div className="content__newposts"> New posts</div>
        </div>
    );
}
export default Profile;