import { Requests } from "../../DAL/api";

export type initialStateType = typeof initialState

export type unfollowAccType={
        type:'UNFOLLOW',
        userId: number
    }

export type followAccType={
    type:'FOLLOW',
    userId: number
}

export type setUsersType={
        type:'SET-USERS',
        users: any
    }

export type setAllUsersType={
        type:'SET-ALL-USERS',
        allUsers: any
    }

export type setCurrentPageType={
        type:'SET-CURRENT-PAGE',
        currentPage: number
    }

export type setChangeUsersCountType={
        type:'CHANGE-USERS-COUNT',
        usersCount:number
    }

export type changeDataFetchType={
        type:'CHANGE-DATA-FETCH',
        dataFetch: boolean
    }

export type changeFollowingProgressType={
        type:'CHANGE-FOLLOWING-PROGRESS',
        followingProgress: any,
        userId: number
    }    

let initialState={
    users: [] as any,
    allUsers: [] as any,
    pageSize:5 as number,
    usersCount: 25 as number,
    currentPage:1 as number,
    dataFetch:false as boolean,
    followingProgress:[] as any,
}

const usersReducer = (state = initialState, action: any): initialStateType => {
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


export const unfollowAcc=(userId: number): unfollowAccType=>(
    {
        type:'UNFOLLOW',
        userId
    }
)

export const followAcc=(userId: number): followAccType=>(
    {
        type:'FOLLOW',
        userId
    }
);

export const setUsers=(users:any): setUsersType=>(
    {
        type:'SET-USERS',
        users
    }
)

export const setAllUsers=(allUsers: any): setAllUsersType=>(
    {
        type:'SET-ALL-USERS',
        allUsers
    }
)
export const setCurrentPage=(currentPage: number): setCurrentPageType=>(
    {
        type:'SET-CURRENT-PAGE',
        currentPage
    }
)

export const setChangeUsersCount=(usersCount: number): setChangeUsersCountType=>(
    {
        type:'CHANGE-USERS-COUNT',
        usersCount
    }
)

export const changeDataFetch=(dataFetch:boolean): changeDataFetchType=>(
    {
        type:'CHANGE-DATA-FETCH',
        dataFetch
    }
)

export const changeFollowingProgress=(followingProgress: any, userId: number): changeFollowingProgressType=>(
    {
        type:'CHANGE-FOLLOWING-PROGRESS',
        followingProgress,
        userId
    }
)


export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: any)=> {
        dispatch(changeDataFetch(true));
        let data = await Requests.getUsers(currentPage, pageSize)
        dispatch(changeDataFetch(false));    
        dispatch(setCurrentPage(currentPage));
        dispatch(setUsers(data.items));
        dispatch(setChangeUsersCount(data.totalCount));
}

export const getAllUsers = () => async (dispatch:any)=> {
        let data = await Requests.getUsers(1, 100)   
        dispatch(setAllUsers(data.items));
        dispatch(setChangeUsersCount(data.totalCount));
    }

    const followUnfollowFlow = async (dispatch: any, userId: number, requestsMethod: any, actionCreator: any) =>{
        dispatch(changeFollowingProgress(true, userId))
        let response = await requestsMethod(userId)
        if (response.data.resultCode === 0){
            dispatch(actionCreator(userId))
    }
    dispatch(changeFollowingProgress(false, userId))
    }

export const follow = (userId: number) => {
    return async (dispatch: any)=> {
    let requestsMethod =  Requests.follow.bind(Requests)
    let actionCreator = followAcc
    followUnfollowFlow(dispatch, userId, requestsMethod, actionCreator)
}
}

export const unfollow = (userId: number) => {
    return async (dispatch: any)=> {
        let requestsMethod =  Requests.unfollow.bind(Requests)
        let actionCreator = unfollowAcc
        followUnfollowFlow(dispatch, userId, requestsMethod, actionCreator)
    }
}


export default usersReducer