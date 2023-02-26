import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css'
import avatarPhoto from './../../imgs/ava.gif'

const Navbar = (props) => {

  useEffect(()=>{
    props.getAllUsers(1, 100)
  }, [props.users])
  let friendsMap = props.allUsers.map( friend =>{
    if(friend.followed===true)return(<NavLink to={'/profile/' + friend.id}>
    <div className={classes.friends}> <div><img className={classes.ava}  src={friend.photos.small !=null ? friend.photos.small : avatarPhoto}/></div><div>{friend.name}</div></div>
    </NavLink>)})
  return(
    <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
        <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
        </div>
        <div className={classes.item}>
        <a href="news">News</a>
        </div>
        <div className={classes.item}>
        <a href="/music">Music</a>
        </div>
        <div className={classes.item}>
        <a href="/settings">Settings</a>
        </div>
        <div className={classes.item}>
        <a>Friends:</a>
        {friendsMap}
        </div>
      </nav>
    )
}
 export default Navbar;