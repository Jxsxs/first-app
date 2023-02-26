import React from "react";
import ReactDOM from "react-dom";
import App from './../../App'
import profileReducer, { addPost } from "./profile-reducer";



it('length of posts should be 5', ()=>{
    //1. text data
    let action = addPost('blabla')
    let state = { 
        posts: [
        {message:"hi", likesCount:"11", id:1},
        {message:"ky", likesCount:"10", id:2}
    ],
    newPostsText:""
    };
//2. action
    let newState = profileReducer(state, action )
//3. expectation
   expect(newState.posts.length).toBe(5)
})