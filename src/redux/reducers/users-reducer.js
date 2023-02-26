import { Requests } from "../../DAL/api";

let initialState={
    users: [],
    allUsers: [],
    pageSize:5,
    usersCount: 25,
    currentPage:1,
    dataFetch:false,
    followingProgress:[]
}

const usersReducer = (state = initialState, action) => {
    if(action.type==='UNFOLLOW'){
        return{...state,
        users:state.users.map(user=>{
            if(user.id===action.userId){
                return{...user, followed:false}}
        return user
        }),
    }
    } if(action.type==='FOLLOW'){
        return{...state,
                users:state.users.map(user=>{
                    if(user.id===action.userId){
                        return{...user, followed:true}
                    }
                    return user
                }),
            }
    } if(action.type==='SET-USERS'){
        return{...state, 
            users:[...action.users]}
    } if(action.type==='SET-ALL-USERS'){
        return{...state, 
            allUsers:[...action.allUsers]}
    }if(action.type==='SET-CURRENT-PAGE'){
        return{...state,
        currentPage: action.currentPage}
    }
    if(action.type === 'CHANGE-USERS-COUNT'){
        return{...state,
        usersCount:action.usersCount}
    }if(action.type==='CHANGE-DATA-FETCH'){
        return{...state,
        dataFetch:action.dataFetch}
    }if(action.type==='CHANGE-FOLLOWING-PROGRESS'){
        return{...state,
        followingProgress: action.followingProgress 
        ? [...state.followingProgress, action.userId]
        : state.followingProgress.filter(id=>id!==action.userId)
        }
    }
    return state;
};


export const unfollowAcc=(userId)=>(
    {
        type:'UNFOLLOW',
        userId
    }
)

export const followAcc=(userId)=>(
    {
        type:'FOLLOW',
        userId
    }
);

export const setUsers=(users)=>(
    {
        type:'SET-USERS',
        users
    }
)

export const setAllUsers=(allUsers)=>(
    {
        type:'SET-ALL-USERS',
        allUsers
    }
)
export const setCurrentPage=(currentPage)=>(
    {
        type:'SET-CURRENT-PAGE',
        currentPage
    }
)

export const setChangeUsersCount=(usersCount)=>(
    {
        type:'CHANGE-USERS-COUNT',
        usersCount
    }
)

export const changeDataFetch=(dataFetch)=>(
    {
        type:'CHANGE-DATA-FETCH',
        dataFetch
    }
)

export const changeFollowingProgress=(followingProgress, userId)=>(
    {
        type:'CHANGE-FOLLOWING-PROGRESS',
        followingProgress,
        userId
    }
)


export const getUsers = (currentPage, pageSize) => async (dispatch)=> {
        dispatch(changeDataFetch(true));
        let data = await Requests.getUsers(currentPage, pageSize)
        dispatch(changeDataFetch(false));    
        dispatch(setCurrentPage(currentPage));
        dispatch(setUsers(data.items));
        dispatch(setChangeUsersCount(data.totalCount));
}

export const getAllUsers = () => async (dispatch)=> {
        let data = await Requests.getUsers(1, 100)   
        dispatch(setAllUsers(data.items));
        dispatch(setChangeUsersCount(data.totalCount));
    }

    const followUnfollowFlow = async (dispatch, userId, requestsMethod, actionCreator) =>{
        dispatch(changeFollowingProgress(true, userId))
        let response = await requestsMethod(userId)
        if (response.data.resultCode === 0){
            dispatch(actionCreator(userId))
    }
    dispatch(changeFollowingProgress(false, userId))
    }

export const follow = (userId) => {
    return async (dispatch)=> {
    let requestsMethod =  Requests.follow.bind(Requests)
    let actionCreator = followAcc
    followUnfollowFlow(dispatch, userId, requestsMethod, actionCreator)
}
}

export const unfollow = (userId) => {
    return async (dispatch)=> {
        let requestsMethod =  Requests.unfollow.bind(Requests)
        let actionCreator = unfollowAcc
        followUnfollowFlow(dispatch, userId, requestsMethod, actionCreator)
    }
}


export default usersReducer