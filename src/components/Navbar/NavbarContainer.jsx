import { connect } from "react-redux";
import Navbar from "./Navbar";
import { getAllUsers } from './../../redux/reducers/users-reducer';

// const NavbarContainer = (props) => {
//   debugger
//   let state = props.store.getState();
//   return(
//     <Navbar friends={state.friendsPage.friends}/>
//     )
// }

let mapStateToProps=(state)=>{
  return{
    allUsers: state.usersPage.allUsers,
    users: state.usersPage.users
  }
}

// let mapDispatchToProps =(dispatch)=>{
//   return{
//     getAllUsers
//   }
// }
let NavbarContainer = connect(mapStateToProps, {getAllUsers})(Navbar)
export default NavbarContainer;