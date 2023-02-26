import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./reducers/auth-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";
import thunkMiddleware from "redux-thunk"
import appReducer from "./reducers/app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer, 
    usersPage:usersReducer,
    auth:authReducer,
    app:appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;