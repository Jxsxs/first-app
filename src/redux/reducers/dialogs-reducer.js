let initialState={
    dialogs: [
    {name: "Kaneki", id:1, status:"[online]", src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2GDNTPK2K06EioiUGmI5Gz_OtvNganoOgRw&usqp=CAU'},
    {name: "Kenpachi", id:2, status:"[offline]", src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8IUvie3C5jTYP7B7YEXAEsGOWb9OBBdN4A&usqp=CAU'},
    {name: "Touka", id:3, status:"[online]", src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7WslvT2pIVvwmFLS6ryQdG3PdNtbF4FmSA&usqp=CAU'},
    {name: "Shinji", id:4, status:"[offline]", src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujmTXgxS47i-j2xtF1admqf7ReuUc3JmmFw&usqp=CAU'}
    ],


messages: [
    {message:[{userMess:"hi", userId:1, time:"15:36", src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2GDNTPK2K06EioiUGmI5Gz_OtvNganoOgRw&usqp=CAU'}, {userMess:"how are u?", userId:1, time:"14:00", src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2GDNTPK2K06EioiUGmI5Gz_OtvNganoOgRw&usqp=CAU'}, {userMess:"hello", userId:228, time:"14:01", src228:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdBsf9UQGYt03gH1kd1TfFoAOqr_lxhVc9w&usqp=CAU'}], id:1},
    {message:[{userMess:"ky", userId:2, time:"12:00", src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8IUvie3C5jTYP7B7YEXAEsGOWb9OBBdN4A&usqp=CAU'}], id:2},
    {message:[{userMess:"hi", userId:3, time:"12:30", src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7WslvT2pIVvwmFLS6ryQdG3PdNtbF4FmSA&usqp=CAU'}], id:3},
    {message:[{userMess:"hi", userId:4, time:"13:00", src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujmTXgxS47i-j2xtF1admqf7ReuUc3JmmFw&usqp=CAU'}, {userMess:"how are u?", userId:228, time:"13:20", src228:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdBsf9UQGYt03gH1kd1TfFoAOqr_lxhVc9w&usqp=CAU'}], id:4}
],
newMessagesText:"",
}

const dialogsReducer=(state = initialState, action)=>{
    if(action.type==='SEND-MESSAGE'){
        let newMessage ={userMess:action.newMessageText, userId:228, time:'14:48', src228:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdBsf9UQGYt03gH1kd1TfFoAOqr_lxhVc9w&usqp=CAU'};
        let stateCopy={...state,
        messages:[...state.messages]}
    stateCopy.messages[0].message.push(newMessage);
    stateCopy.newMessagesText="";
    return stateCopy;
    } else if(action.type==='CHANGE-MESSAGE-TEXT'){
    // let stateCopy={...state};
    // stateCopy.newMessagesText={...state.newMessagesText}
    // stateCopy.newMessagesText = (action.newMsgText);
    return {...state,
    newMessagesText:action.newMsgText};
    }    
    return state;
}
export const sendMessage=(newMessageText)=>{
    return{
        type:'SEND-MESSAGE',
        newMessageText
    }
};
export const changeMessageText=(text)=>{
    return{
        type:'CHANGE-MESSAGE-TEXT',
        newMsgText:text
    }
};
export default dialogsReducer;