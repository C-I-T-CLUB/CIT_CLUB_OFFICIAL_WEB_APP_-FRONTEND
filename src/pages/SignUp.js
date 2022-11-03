import React from 'react'
import Footer from '../components/Footer'
import { Loader } from '../components/Loader'
import { Fragment } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useSignupMutation } from '../hooks/apis/authapis'
import { useNavigate } from 'react-router-dom'
import { Notification } from '../components/Notification'
function SignUp() {
  const navigate = useNavigate()
  const {mutateAsync:signupMutation,isError} = useSignupMutation()
  return (
    <>
        <div className="modernForm">
  <div className="imageSection">
      <div className="overlay"></div>
    <div className="textInside">
      <h1>Get access to a wide array of resouces</h1>
      <p className="tagLine">Register Today</p>
    </div>
  </div>
  <div className="contactForm">
    <h1>Registaration Form</h1>
    <Fragment>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password:"",
            terms: false,
            submit:null

          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().max(255).required("Username Name Is Required"),
            email: Yup.string()
              .email("Invalid Email Provided")
              .required("Email is Required"),
            password: Yup.string().required("Please Enter Password").min(6,"Password Must Be Greater Than 6 Characters"),
            terms: Yup.bool().isTrue("Please accept Terms and Condition")
          })}
          onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
            setSubmitting(true)
            delete values.terms;
            delete values.submit;
            signupMutation(values).then(res=>{
              setSubmitting(false)
              if (res){
                navigate("/Login")
              }else{
                setErrors({
                  submit: 'Failed! Error Trying To Signup.'
                })
              }
            }).catch(err=>{
              setSubmitting(false)
              setErrors({
                submit: err?.message ?? 'Failed Error Trying To Signup'
              })
            })
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
                <div className="name" >
                <label htmlFor="username">Username </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="ex: johndoe"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.username && errors.username && ('error-input')}
                />
               {
                touched.username && errors.username && (
                    <p className="form-error">{errors.username}</p>
                )
               }
              </div>
              <div className="name" >
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ex: johndoe@email.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.email && errors.email && ('error-input')}
                />
               {
                touched.email && errors.email && (
                    <p className="form-error">{errors.email}</p>
                )
               }
              </div>
              <div className="name" >
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="******"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.password && errors.password && ('error-input')}
                />
               {
                touched.password && errors.password && (
                    <p className="form-error">{errors.password}</p>
                )
               }
              </div>
              <div className="checkbox">
                <input type="checkbox" id="checkbox" name="terms" required value={values.terms} onChange={handleChange} onBlur={handleBlur} />
                <label htmlFor="checkbox">
                  By signing up, you agree to the<a href="# ">Term of Service</a>
                </label>
                {
                touched.terms && errors.terms && (
                    <p className="form-error">{errors.terms}</p>
                )
               }
              </div>
              {
               ( (isError || errors.submit) && !isSubmitting )&& (
                  <Notification isSuccess={false} style={{marginTop:12}} text={errors.submit}/>
                )
              }
              <button type="submit" className="submit" disabled={isSubmitting} >
                { isSubmitting ?  <Loader/> : 'Register' }
              </button>
            </form>
          )}
        </Formik>
      </Fragment>
  </div>
</div>
        <Footer/>
    </>

  )
}

export default SignUp