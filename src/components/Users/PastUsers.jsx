import React from "react";
import classes from './Users.module.css'
import axios from 'axios'
import avatarPhoto from './../../imgs/ava.png'

const Users = (props)=>{
    let getUsers=()=>{
    if(props.users.length===0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
            props.setUsers(response.data.items)
        }
        )
    }
}
    return<div><button onClick={getUsers}>------</button>
    {
    props.users.map( user =>{return(
          <div>
           <img className={classes.ava} src={user.photos.small !=null ? user.photos.small : avatarPhoto}/>
           <div>{user.name}</div>
           <div>{'user.status'}</div>
           <div>{'user.country'}</div>
           <div>{'user.city'}</div>
           <div>
               {user.followed
               ?<button className={classes.button1} onClick={()=>{props.follow(user.id)}}>Unfollow</button>
               :<button className={classes.button2}  onClick={()=>{props.unfollow(user.id)}}>Follow</button>
               }
           </div>
           </div>
          
       )
      })
    
    }
    </div>
}

export default Users;