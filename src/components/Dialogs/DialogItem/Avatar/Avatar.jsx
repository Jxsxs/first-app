import React from "react";
import s from './Avatar.module.css'

const Avatar = (props) => {
    return(
        <img className={s.ava} src={props.src}/>
    )
}

export default Avatar;