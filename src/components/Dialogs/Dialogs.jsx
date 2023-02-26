import React from "react";
import s from './Dialogs.module.css'
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { changeMessageTextActionCreator, sendMessageActionCreator } from "../../redux/reducers/dialogs-reducer";
import authRedirect from "../../hoc/redirect";
import { ErrorMessage, Field, Form, Formik } from "formik";

const dialogs = (props) => {
   let dialogsMap = props.dialogs.map( nav =><div><NavLink className={s.nav} to={`/dialogs/${nav.id}`}><div><img className={s.ava} src={nav.src}/> </div>{nav.name}{nav.status}</NavLink></div>)
    let messagesMap = props.messages.map(message => <Route path={`/${message.id}`} element={message.message.map( mess =>{if(mess.userId === 228){return(<div className={s.myMessage}><div><div><img className={s.dialogAva} src={mess.src228} /></div><div>{mess.userMess}</div><div>{mess.time}</div></div></div>)}else {return(<div className={s.notMyMessage}><div><img className={s.dialogAva} src={mess.src}/></div><div>{mess.userMess}</div><div>{mess.time}</div></div>)}})}/>)
    let newMessageText=React.createRef();

    let sendMessage=(values)=>{
        props.sendMessage(values.newMessageText)
    }
    let changeMessageText=()=>{
        let text =newMessageText.current.value;
        props.changeMessageText(text)
    }
    return(
        <div className={s.dialogs}>
                <nav>
                <div className={s.dialogsItems}>
                    {dialogsMap}
                </div>
            </nav>
            <div className={s.myMessage}>
            <Routes>
            {messagesMap}
            </Routes>
            {/* <div>
            <textarea onChange={changeMessageText} ref={newMessageText} value={props.newMessagesText}></textarea>
            </div>
            <div>
            <button onClick={sendMessage}>send message</button>
            </div> */}
            <sendMessageForm/>
            <Formik
            initialValues={{
                newMessageText:'',
            }}
            onSubmit={(values)=>{
                sendMessage(values)
            }}
            validate={values => {
                const errors = {};
                if (!values.newMessageText) {
                  errors.newMessageText = 'Required';
                }
                return errors;
              }}
            
            >
        {({values, errors, touched, handleChange, handleSubmit, isValid })=>(
            <div>
                <p>
                    <div>
                    <Field component="textarea" name="newMessageText" type="newMessageText" onChange={handleChange} value={values.newMessageText} placeholder="ENTER UR MESSAGE"/>
                    </div>
                    <button onClick={handleSubmit} disabled={!isValid} type="submit">send message</button>
                </p>
            </div>
        )}
            </Formik>
            </div>
            </div>
    )
}

let sendMessageForm = (props) => {
    return(
        <div>
    <Formik
       initialValues={{ message: '' }}
       validate={values => {
         const errors = {};
         if (!values.message) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.message)
         ) {
           errors.email = 'message is not corrected';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         ;
       }}
     >
        {({ isSubmitting }) => (
    <form>
<div>
<Field component="textarea" type="newMessageText" name="newMessageText" placeholder="ENTER UR MESSAGE"/>
            </div>
            <div>
            <button>send message</button>
            </div>
    </form>
        )}
    </Formik>
    </div>
    )
}

const Dialogs = authRedirect(dialogs);

export default Dialogs;