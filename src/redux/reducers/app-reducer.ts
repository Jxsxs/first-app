import { setAuth } from "./auth-reducer.ts"

export type initialStateType = {
    initialized: boolean;
}
export type initializedSuccessType={
    type: 'SET-INITIALIZED'
}

let initialState: initialStateType ={
initialized: false
}

const appReducer = (state = initialState, action: any): initialStateType => {
    if(action.type==='SET-INITIALIZED'){
        return{...state,
            initialized:true
        }}           
return state
}


export const initializedSuccess=(): initializedSuccessType=>(
    {
        type:'SET-INITIALIZED',
    }
)

export const initialize= () => (dispatch: any)=>{
    let promise=dispatch(setAuth())
    Promise.all([promise])
    .then(()=>{
            dispatch(initializedSuccess())
        })
}

export default appReducer;