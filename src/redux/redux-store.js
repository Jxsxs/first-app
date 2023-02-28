import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./reducers/auth-reducer.ts";
import dialogsReducer from "./reducers/dialogs-reducer.ts";
import profileReducer from "./reducers/profile-reducer.ts";
import usersReducer from "./reducers/users-reducer.ts";
import thunkMiddleware from "redux-thunk"
import appReducer from "./reducers/app-reducer.ts";

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