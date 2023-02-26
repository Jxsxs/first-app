import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props, state) => {
    return(
      <div>
      <ProfileInfo profile={props.profile} status={props.status} changeStatus={props.changeStatus} id={props.id} saveAvatar={props.saveAvatar} saveInfo={props.saveInfo}/>
      <MyPostsContainer store={props.store}/>
      </div>
    )
}

export default Profile;