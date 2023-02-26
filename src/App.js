import React, { useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/login';
import Preloader from './components/preloader/preloader';
import { initialize } from './redux/reducers/app-reducer';
import { getAllUsers } from './redux/reducers/users-reducer';
import { connect } from 'react-redux';

const App = (props) => {
  useEffect(()=>{
    props.initialize();
  //   props.getAllUsers();
  // },  [props.users]
}, []);
  if(!props.initialized){
    return <Preloader />
  }else
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavbarContainer/>
      <div className='app-wrapper-content'>
      <Routes>
      <Route path='/profile/' element={<ProfileContainer/>}/>
      <Route path='/profile/:profileId' element={<ProfileContainer/>}/>
      <Route path='/dialogs/*' element={<DialogsContainer/>} />
      <Route path='/users' element={<UsersContainer/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </div>
      </div>
      </BrowserRouter>
  );
};


let mapStateToProps=(state)=>{
  return{
    initialized:state.app.initialized,
    users:state.usersPage.users
  }
}

export default connect(mapStateToProps, {initialize, getAllUsers })(App);
