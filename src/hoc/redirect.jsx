import React from "react";
import { Navigate } from "react-router-dom";

const authRedirect = (Component) => {
    let Redirect=(props)=>{
        if(!props.isAuth) return<Navigate to='/login'/>
        return <Component {...props}/>
    }
    return Redirect
}

export default authRedirect;