import React from "react"
import { Requests } from "../../../DAL/api"
import { saveAvatar } from "../../../redux/reducers/profile-reducer"

const ChangeAvatar = (props) => {
    const avatarChange = (e) => {
            if(e.target.files.length){
            props.saveAvatar(e.target.files[0])
        }
    }
    if(props.profileID === props.id){
        return<div>
        <input type="file" onChange={avatarChange}/>
    </div>
    }else{}
}

export default ChangeAvatar;