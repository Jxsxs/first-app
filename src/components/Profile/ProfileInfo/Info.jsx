import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik"
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
  .min(2, 'full name must be at least minimum 2 characters')
  .required('full name is required'),
  aboutMe: Yup.string()
  .required('about me is required'),  
  lookingForAJobDescription: Yup.string()
  .required('looking for a job is required'),
});

const Info = (props) => {
  let [editMode, setEditMode] = useState(false)
  if(props.id != props.profileID){
    return<div>
    <div>
      <span onClick={()=>{setEditMode(true)}}>
      <b>full name</b>: {props.profile.fullName}
      </span>
    </div>
    <div>
    <span onClick={()=>{setEditMode(true)}}>
      <b>looking for a job</b>: {props.profile.lookingForAJobDescription}
      </span>
    </div>
    <div>
    <span onClick={()=>{setEditMode(true)}}>
      <b>about me</b>: {props.profile.aboutMe}
      </span>
    </div>
    <div>
    <span onClick={()=>{setEditMode(true)}}>
      <b>contacts</b>:{Object.keys(props.profile.contacts).map(key=>{
        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
      })}
      </span>
    </div>
    </div>
  }if(props.id === props.profileID){
    if(editMode){
      return<div>
              <Formik
        initialValues={
          props.profile
        }
        onSubmit={(values) => {
          props.saveInfo(values)
          console.log(values)
          setEditMode(false)
         }}
         validationSchema={validationSchema}
         >
       {({ isSubmitting }) => (
         <Form>
          <div>
           full name:
           <div>
            <Field type="fullName" placeholder="full name" name="fullName"/>
           <ErrorMessage name="fullName" component="div" />
          </div>
          </div>
          <div>
           about me:
           <div><Field type="aboutMe" placeholder="about me" name="aboutMe" as="textarea" />
           <ErrorMessage name="aboutMe" component="div" />
          </div>
          </div>
          <div>
           looking for a job:
           <div>
            <Field name="lookingForAJobDescription" type="lookingForAJobDescription" placeholder="lookingForAJobDescription" as="select">
   <option value="true">yes</option>
   <option value="false">no</option>
 </Field>
 </div>
          </div>
          <div>
            contacts(not required):
            {Object.keys(props.profile.contacts).map(key=>{
              return <div>
              <b>{key}:<Field key={key} name={`contacts.${key}`} type={key} placeholder={key} contactValue={props.profile.contacts[key]}/></b>
            </div>
            })}
          </div>
          <div>
            <p>{props.error}</p>
          </div>
          <button type="submit" disabled={isSubmitting}>
             confirm changes
           </button>
           <button onClick={()=>{setEditMode(false)}}>cancel changing</button>
         </Form>
       )}
        </Formik>
        </div>}if(!editMode){
          return<div>
            <span onClick={()=>{setEditMode(true)}}>
          <div>
            <b>full name</b>: {props.profile.fullName}
          </div>
          <div>
            <b>looking for a job</b>: {props.profile.lookingForAJobDescription}
          </div>
          <div>
            <b>about me</b>: {props.profile.aboutMe}
          </div>
          <div>
            <b>contacts</b>:{Object.keys(props.profile.contacts).map(key=>{
              return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
          </div>
            </span>
          </div>
        }
        }
}

let Contact = ({contactTitle, contactValue})=>{
  return<div><p1>{contactTitle}</p1>: {contactValue}</div>
}

export default Info