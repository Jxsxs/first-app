import React from "react"

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