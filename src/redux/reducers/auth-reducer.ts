import { Requests } from "../../DAL/api";

export type initialStateType = typeof initialState

export type authType = {
    type: 'SET-AUTH';
    data: {id:null | number, email: null | string, login: null | string, isAuth:boolean}
}

export type setErrorType = {
    type: 'SET-ERROR';
    errorMessage: string
}

export type setCaptchaType = {
    type: 'SET-CAPTCHA';
    captcha: string
}

let initialState={
    id:null as null | number,
    email:null as null | string,
    login:null as null | string,
    isAuth:false as boolean,
    errorMessage:null as null | string,
    captcha:null as null | string
}

const authReducer = (state = initialState, action: any): initialStateType => {
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


export const auth=(id: number | null, email: string | null, login: string | null, isAuth: boolean): authType=>(
    {
        type: 'SET-AUTH',
        data:{id, email, login, isAuth}
    }
)

const setError=(errorMessage: string): setErrorType=>(
    {
        type:'SET-ERROR',
        errorMessage:errorMessage
    }
)

const setCaptcha=(captcha: string): setCaptchaType=>(
    {
        type:'SET-CAPTCHA',
        captcha
    }
)

export const setAuth=()=> async (dispatch: any) =>{
        let response = await Requests.auth()
          if(response.data.resultCode === 0) {
          let {id, email, login } = response.data.data;
          dispatch(auth(id, email, login, true))
          }
    };

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any)=>{
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
                dispatch(auth(null, null, null, false))
            }
            window.location.reload()
        }

export default authReducer;