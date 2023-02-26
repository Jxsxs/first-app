import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setAuth, logOut } from "../../redux/reducers/auth-reducer";
import Header from "./Header";

const HeaderContainer = (props) => {

  return(
    <Header {...props}/>
    )
}

const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    email:state.auth.email,
    id:state.auth.id
})
export default connect ( mapStateToProps, {logOut})(HeaderContainer)  