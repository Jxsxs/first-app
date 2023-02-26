import { Field, Formik } from "formik";
import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    console.log('saxa')
    let postsMap = props.posts.map ( posts => <Post message={posts.message} likesCount={posts.likesCount}/>);


    let addPost =(values)=>{
        props.addPost(values.newPostText)
    }

return(
<div className={s.postsBlock}>
my posts
<div>
<Formik
            initialValues={{
                newPostText:'',
            }}
            onSubmit={(values)=>{
                addPost(values)
                console.log(values)
            }}
            validate={values => {
                const errors = {};
                if (!values.newPostText) {
                  errors.newPostText = 'Required';
                }
                return errors;
              }}
            >
        {({values, errors, touched, handleChange, handleSubmit, isValid })=>(
            <div>
                <p>
                    <div>
                    <Field component="textarea" name="newPostText" type="newPostText" onChange={handleChange} value={values.newPostText} placeholder="ENTER POST TEXT"/>
                    </div>
                    <button onClick={handleSubmit} disabled={!isValid} type="submit">add post</button>
                </p>
            </div>
        )}
            </Formik>
</div>
<div className={s.posts}>
{postsMap}
</div>
</div>
)
}

export default MyPosts;