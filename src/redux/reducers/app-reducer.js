import { setAuth } from "./auth-reducer";


let initialState={
initialized: false
}

const appReducer = (state = initialState, action) => {
    if(action.type==='SET-INITIALIZED'){
        return{...state,
            initialized:true
        }}           
return state
}


export const initializedSuccess=()=>(
    {
        type:'SET-INITIALIZED',
    }
)

export const initialize= () => (dispatch)=>{
    let promise=dispatch(setAuth())
    Promise.all([promise])
    .then(()=>{
            dispatch(initializedSuccess())
        })
}

export default appReducer;