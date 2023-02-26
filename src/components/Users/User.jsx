import React from "react";
import classes from './Users.module.css'
import avatarPhoto from './../../imgs/ava.gif'
import { NavLink } from "react-router-dom";


const User = ({user, followingProgress, follow, unfollow})=>{
    return <div>
        <div>
        <NavLink className={classes.nav} to={'/profile/' + user.id}>
       <img className={classes.ava} src={user.photos.small !=null ? user.photos.small : avatarPhoto}/>
       <div>{user.name}</div>
       </NavLink>
       <div>
           {user.followed
           ?<button disabled={followingProgress.some(id=>id===user.id)} onClick={()=>{
            unfollow(user.id)
        }
        }>Unfollow</button>
           :<button disabled={followingProgress.some(id=>id===user.id)}  onClick={()=>{
            follow(user.id)
        }
    }>Follow</button>
           }
       </div>
       </div>
       </div>
    }

    export default User;