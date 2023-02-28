import React from "react"
import { connect } from "react-redux";
import { addPost, changePostText } from "../../../redux/reducers/profile-reducer.ts";
import MyPosts from "./MyPosts";

let mapStateToProps =(state)=>{
    return{
        posts: state.profilePage.posts,
        newPostsText: state.profilePage.newPostsText,
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
    addPost: (newPostText)=>{
        dispatch(addPost(newPostText))
    },
    changePostText: (text)=>{
        let action=changePostText(text);
        dispatch(action)
    }
}
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;