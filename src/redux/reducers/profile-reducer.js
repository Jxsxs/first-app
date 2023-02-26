import { Requests } from "../../DAL/api";

let initialState = { 
    posts: [
    {message:"hi", likesCount:"11", id:1},
    {message:"ky", likesCount:"10", id:2}
],
newPostsText:"",
profile:null,
status:''
};

const profileReducer=(state = initialState, action)=>{
    if(action.type==='ADD-POST'){
        let newPost={message: action.newPostText ,likesCount:"0",id:3};
        // let stateCopy ={...state};
        // stateCopy.posts=[...state.posts];
        // stateCopy.posts.unshift(newPost);
        // stateCopy.newPostsText="";
        let stateCopy = {...state,
        posts:[...state.posts],
    newPostsText:''};
    stateCopy.posts.unshift(newPost)
    return stateCopy
    }if(action.type==='CHANGE-POST-TEXT'){
    // let stateCopy={...state}
    // stateCopy.newPostsText={...state.newPostsText};
    // stateCopy.newPostsText = (action.newText);
    return{...state,
        newPostsText:action.newText
    }
    } if(action.type==='SET-USER-PAGE'){
        return{...state,
        profile:action.profile}
    } if(action.type==='SET-STATUS'){
        return{...state,
        status:action.status}
    }
    return state;
}


export const addPost=(newPostText)=>{
    return{
        type:'ADD-POST',
        newPostText
    }
};
export const changePostText=(text)=>{
    return{
        type:'CHANGE-POST-TEXT',
        newText:text
    }
};
export const setUserPage=(profile)=>{
    return{
        type:'SET-USER-PAGE',
        profile
    }
};

export const setStatus=(status)=>{
    return{
        type:'SET-STATUS',
        status
    }
};

export const setProfile = (profileId) => async (dispatch)=>{
        let response = await Requests.profile(profileId)
      dispatch(setUserPage(response.data))
};

export const getStatus = (profileId) => async (dispatch)=>{
        let response = await Requests.getStatus(profileId)
            dispatch(setStatus(response.data))
    };

export const changeStatus = (status) => async (dispatch)=>{
    let response = await Requests.changeStatus(status)
                dispatch(setStatus(status))
    }
    
    
export default profileReducer;