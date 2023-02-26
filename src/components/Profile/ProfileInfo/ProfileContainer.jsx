import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setProfile, getStatus, changeStatus } from "../../redux/reducers/profile-reducer";
import { useLocation,useNavigate,useParams } from "react-router-dom";
import Profile from "./Profile";
import authRedirect from "../../hoc/redirect";


// class ProfileContainer extends React.Component{
//   componentDidMount(){
//     let profileId = this.props.router.params.profileId;
//     if(!profileId){
//       profileId=this.props.id
//     }
//     this.props.setProfile(profileId)
//     this.props.getStatus(profileId)
//   }
//   render(){
//     return (
//       <div>
//         <Profile {...this.props} profile={this.props.profile} status={this.props.status} changeStatus={this.props.changeStatus} id={this.props.id} />
//       </div>
//       )
//     }
//   }

// function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Component
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         );
//     }

//     return ComponentWithRouterProp;
// }

// let AuthRedirect = authRedirect(ProfileContainer);

//   let mapStateToProps=(state)=>({
//     profile: state.profilePage.profile,
//     isAuth: state.auth.isAuth,
//     id: state.auth.id,
//     status: state.profilePage.status
//   })
  
//   export default connect(mapStateToProps, {setProfile, getStatus, changeStatus})(withRouter(AuthRedirect));

  const ProfileContainer =(props) =>{
    useEffect(()=>{
      let profileId = props.router.params.profileId;
      if(!profileId){
        profileId=props.id
      }
      props.setProfile(profileId)
      props.getStatus(profileId)
    },[])
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
  
    