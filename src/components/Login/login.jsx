import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from "./../../redux/reducers/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  // captcha: Yup.string()
  // .required('Required')
});
const Login = (props) => {
  if(props.isAuth){
    return <Navigate to={"/profile"} />
  }
  return(
    <div>
            <h1>Login</h1>
<Formik
       initialValues={{ email: '', 
       password: '',
       captcha: null,
      rememberMe: 'true' }}
      
       onSubmit={(values) => {
        console.log(values)
         props.login(values.email, values.password, values.rememberMe, values.captcha)
        }}
        validationSchema={validationSchema}
        >
       {({ isSubmitting }) => (
         <Form>
          <div>
           <Field type="email" placeholder="email" name="email" />
           <ErrorMessage name="email" component="div" />
          </div>
          <div>
           <Field type="password" placeholder="password" name="password" />
           <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <input type="checkbox" name="rememberMe" />remember me
          </div>
          <div>
            <p>{props.error}</p>
            </div>
            <div>
            {props.captcha !== null && (
            <div>
            <img src={props.captcha} alt="captcha"/>
            <div>
            <Field type="captcha" placeholder="captcha" name="captcha"/>
            {/* <ErrorMessage name="captcha" component="div" /> */}
            </div>
            </div>
            )}
          </div>
           <button type="submit">
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );
}
const mapStateToProps =(state) => ({
  isAuth:state.auth.isAuth,
  error:state.auth.errorMessage,
  captcha: state.auth.captcha
})
export default connect(mapStateToProps, {login})(Login);