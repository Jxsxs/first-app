import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setProfile, getStatus, changeStatus } from "../../redux/reducers/profile-reducer";
import { useLocation,useNavigate,useParams } from "react-router-dom";
import Profile from "./Profile";
import authRedirect from "../../hoc/redirect";


const ProfileContainer =(props)=>{
  let profileId = props.router.params.profileId;
    if(!profileId){
      profileId=props.id
    }
    useEffect(()=>{
      props.setProfile(profileId);
      props.getStatus(profileId)
    }, [profileId])
    return (
      <div>
        <Profile {...props} profile={props.profile} status={props.status} changeStatus={props.changeStatus} id={props.id} />
      </div>
      )
  }

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let AuthRedirect = authRedirect(ProfileContainer);

  let mapStateToProps=(state)=>({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    status: state.profilePage.status
  })
  
  export default connect(mapStateToProps, {setProfile, getStatus, changeStatus})(withRouter(AuthRedirect));