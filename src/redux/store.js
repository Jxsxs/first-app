import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";

let store={

_callSubscriber(){

},

_state: {
    postsPage:{posts: [
        {message:"hi", likesCount:"11", id:1},
        {message:"ky", likesCount:"10", id:2}
    ],
    newPostsText:"",
    },
    dialogsPage:{
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
    dialogIdentity:"",
    
    },

    sidebar: {
        friends: [
            {name:"Kaneki", id:"1", status:"online", src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2GDNTPK2K06EioiUGmI5Gz_OtvNganoOgRw&usqp=CAU'},
            {name:"Kenpachi", id:"2", status:"offline", src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8IUvie3C5jTYP7B7YEXAEsGOWb9OBBdN4A&usqp=CAU'},
            {name:"Shinji", id:"3", status:"offline", src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujmTXgxS47i-j2xtF1admqf7ReuUc3JmmFw&usqp=CAU'}
        ]
    },
},
getState(){
    return(this._state)
},

dispatch(action){
    this._state.postsPage = profileReducer(this._state.postsPage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state)
    // if(action.type==='ADD-POST'){
    //     let newPost={message: this._state.postsPage.newPostsText ,likesCount:"0",id:3}
    //     this._state.postsPage.posts.unshift(newPost);
    //     this._state.postsPage.newPostsText="";
    //     this._rerenderEntireTree(this._state);   
    // } if(action.type==='CHANGE-POST-TEXT'){
    // this._state.postsPage.newPostsText = (action.newText);
    // this._rerenderEntireTree(this._state);
    // } if(action.type==='SEND-MESSAGE'){
    //     let newMessage ={userMess:this._state.dialogsPage.newMessagesText, userId:228, time:'14:48', src228:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdBsf9UQGYt03gH1kd1TfFoAOqr_lxhVc9w&usqp=CAU'};
    // this._state.dialogsPage.messages[0].message.push(newMessage);
    // this._state.dialogsPage.newMessagesText="";
    // this._rerenderEntireTree(this._state)
    // } else if(action.type==='CHANGE-MESSAGE-TEXT'){
    //     this._state.dialogsPage.newMessagesText = (action.newMsgText);
    // this._rerenderEntireTree(this._state)
    // }
},
subscribe (observer) {
    this._callSubscriber = observer
} 
}

