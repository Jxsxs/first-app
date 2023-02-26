import React from "react";

import Paginator from "../helpers/paginator/Paginator";
import User from "./User";


let Users = (props) => {

    return <div>
    <Paginator usersCount={props.usersCount} pageSize={props.pageSize} currentPage={props.currentPage} changePage={props.changePage}/>
        {props.users.map( user => <User user={user} followingProgress={props.followingProgress} follow={props.follow} unfollow={props.unfollow}/>)
            }
        </div>
}

export default Users;