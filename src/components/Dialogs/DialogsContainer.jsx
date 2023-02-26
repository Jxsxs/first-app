import React from "react";
import { connect } from "react-redux";
import { changeMessageText, sendMessage } from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//     debugger
//     let state=props.store.getState();
    
//     let sendMessages=()=>{
//         props.store.dispatch(sendMessageActionCreator())
//     };

//     let changeMessagesText=(text)=>{
//         let action=changeMessageTextActionCreator(text)
//         props.store.dispatch(action)
//     };

//     return(
//        <Dialogs sendMessage={sendMessages} changeMessageText={changeMessagesText} newMessagesText={state.dialogPage.newMessagesText} dialogs={state.dialogPage.dialogs}
//        messages={state.dialogPage.messages}/>
//     )
// }


let mapStateToProps =(state)=>{
    return{
    newMessagesText: state.dialogPage.newMessagesText,
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    isAuth: state.auth.isAuth
}
};

let mapDispatchToProps = (dispatch) => {
return{
    sendMessage: (newMessageText)=>{
        dispatch(sendMessage(newMessageText))
    },
    changeMessagesText: (text)=>{
        let action=changeMessageText(text)
        dispatch(action)
    },
}
};


let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;