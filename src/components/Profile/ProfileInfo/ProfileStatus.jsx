import React, {useState} from "react";


const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false)
  
  let [status, setStatus] = useState(props.status)
  
  const activeChangeStatus = () => {
      setEditMode(true);
    }

    const enactiveChangeStatus = () => {
      setEditMode(false);
      props.changeStatus(status)
    }
    
    const onStatusChange=(e)=>{
      setStatus(e.currentTarget.value)
    } 
    if(props.profileID===props.id) {
      return(
          <div>
              {!editMode &&
              <div>
                  <span onClick={ activeChangeStatus }>{props.status || "status is empty"}</span>
              </div>
  }
  {editMode &&
    <div>
                  <input onChange={onStatusChange} autoFocus={true} onBlur = {enactiveChangeStatus} value={status}/>
              </div>
  }
          </div>
      )
    }else{
      return(
        <div>
          <span>{props.status || "status is empty"}</span>
        </div>
      )
    }
}

export default ProfileStatus;

