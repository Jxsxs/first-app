import { Requests } from "../../DAL/api";

let initialState={
    id:null,
    email:null,
    login:null,
    isAuth:false,
    errorMessage:null,
    captcha:null
}

const authReducer = (state = initialState, action) => {
    if(action.type==='SET-AUTH'){
        return{...state,
            ...action.data,
            isAuth:true
        }           
} if(action.type==='SET-ERROR'){
    return{...state,
    errorMessage:action.errorMessage}
}if(action.type==='SET-CAPTCHA'){
    return{...state,
    captcha: action.captcha}
}
return state
};


export const auth=(id, email, login, isAuth)=>(
    {
        type:'SET-AUTH',
        data:{id, email, login, isAuth}
    }
)

const setError=(errorMessage)=>(
    {
        type:'SET-ERROR',
        errorMessage:errorMessage
    }
)

const setCaptcha=(captcha)=>(
    {
        type:'SET-CAPTCHA',
        captcha
    }
)

export const setAuth=()=> (dispatch) =>{
        return Requests.auth()
        .then(response=>{
          if(response.data.resultCode === 0) {
          let {id, email, login } = response.data.data;
          dispatch(auth(id, email, login, true))
          }
          console.log('aaaa')
      })
    };

export const login = (email, password, rememberMe, captcha) => async (dispatch)=>{
    debugger
    let response = await Requests.login(email, password, rememberMe, captcha)
        if(response.data.resultCode===0){
            dispatch(setAuth())
        }if(response.data.resultCode===10){
            let response = await Requests.captcha()
            dispatch(setCaptcha(response.data.url))
        }else{
            dispatch(setError(response.data.messages[0]))
        }
    };

    export const logOut = () => async (dispatch)=>{
        let response = await Requests.logOut()
            if(response.data.resultCode===0){
                dispatch(setAuth(null, null, null, false))
            }
            window.location.reload()
        }

export default authReducer;