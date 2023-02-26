import React from "react";
import s from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";
import Avatar from "./Avatar/Avatar";


const DialogItem = (props) => {
    return(
        <div className={s.dialog}>
            <Avatar src={props.src} />
           <NavLink className={s.nav} to={"/dialogs/" + props.id} > {props.name} {props.status}</NavLink>
        </div>                 
   )
}

export  default DialogItem;