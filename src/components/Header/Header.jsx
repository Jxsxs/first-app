import React from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { Navigate, NavLink } from "react-router-dom";
import s from './Header.module.css'
import ava from './../../imgs/ava.gif'

const Header = (props) => {
  let logOutClick=()=>{
    props.logOut();
  }
  return(
        <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3u4-nzjtUKNgEQ7PiWjht3rvPEkpjCiiFg&usqp=CAU'/>
      <div className={s.login}>
        {props.isAuth ? <NavLink to={`/profile/${props.id}`}><div className={s.user}><img src={ava}/>{props.email}<button onClick={logOutClick}>log out</button></div></NavLink>
        : <NavLink to='/login'>login</NavLink>
        }
      </div>
      
      </header>
    )
}

export default Header;