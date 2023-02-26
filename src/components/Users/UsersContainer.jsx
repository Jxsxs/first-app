import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, changeFollowingProgress, getUsers } from "../../redux/reducers/users-reducer";
import Users from "./Users";
import Preloader from "../preloader/preloader";
import authRedirect from "../../hoc/redirect";



let mapStateToProps=(state)=>{
    return{
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        dataFetch: state.usersPage.dataFetch,
        followingProgress: state.usersPage.followingProgress,
        isAuth: state.auth.isAuth
    }
}


class UsersContainer extends React.Component{

            componentDidMount(){
                this.props.getUsers(this.props.currentPage, this.props.pageSize)
            }
            changePage = (page) => {
                this.props.getUsers(page, this.props.pageSize)
            }
            render(){
        return <>{this.props.dataFetch ? <Preloader/>: <Users usersCount={this.props.usersCount} pageSize={this.props.pageSize}
        changePage = {this.changePage} currentPage={this.props.currentPage}
        users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
        followingProgress={this.props.followingProgress}
        />}</>
        }
}

let AuthRedirect = authRedirect(UsersContainer);

export default connect(mapStateToProps,{
    follow,
    unfollow,
    changeFollowingProgress,
    getUsers
}
)(AuthRedirect)