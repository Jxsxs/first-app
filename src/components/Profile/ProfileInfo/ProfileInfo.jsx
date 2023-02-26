import React from "react"
import Preloader from "../../preloader/preloader"
import s from './ProfileInfo.module.css'
import avatarPhoto from './../../../imgs/ava.gif'
import ProfileStatus from "./ProfileStatus"
import ChangeAvatar from "./changeAvatar"
import Info from "./Info"

const ProfileInfo = (props) => {
  if(!props.profile){
    return<div className={s.contents}>
        <img src='https://w.wallha.com/ws/14/gauREfxi.jpg'></img>
      </div>
  }
  if( props.profile.userId === 25671){
    return(
<div>
        <div className={s.contents}>
        <img src='https://w.wallha.com/ws/14/gauREfxi.jpg'></img>
      </div>
      <div>
        <div>
        <img className={s.ava} src={props.profile.photos.large != null ? props.profile.photos.large : avatarPhoto}/>
        </div>
        <div>
        ЖЕЧКА ДЫРОВА
        </div>
        <div>
        MY HOBBY IS FUCK WITH MY GRANDFATHER
        </div>
        <div>
        LYUBLYU INCEST
        </div>
        <div>
          MY DAD IS DEAD
        </div>
        <div>
          MY MOM IS GAY
        </div>
        <div>
        U CAN FUCK ME AND MY DEADLY MOM FOR HOTDOG
        </div>
        </div>
        YA LYUBLYU SOSAT BIBY
        </div>
    )
  } else if (props.profile.userId !== 25671){return(
      <div>
        <div className={s.contents}>
        <img src='https://w.wallha.com/ws/14/gauREfxi.jpg'></img>
      </div>
      <div>
        <div>
        <img className={s.ava} src={props.profile.photos.large != null ? props.profile.photos.large : avatarPhoto}/>
        <div>
          <ChangeAvatar profileID={props.profile.userId} id={props.id} saveAvatar={props.saveAvatar}/>
        </div>
        </div>
        <Info profile={props.profile}  profileID={props.profile.userId} id={props.id} saveInfo={props.saveInfo}/>
        <ProfileStatus status={props.status} changeStatus={props.changeStatus} profileID={props.profile.userId} id={props.id} />
        </div>
        </div>
    )
  }
}

export default ProfileInfo;