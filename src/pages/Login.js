import React, { Fragment } from 'react'
import "../assets/css/Registration.css"
import Footer from '../components/Footer'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Loader } from '../components/Loader';
import { useLoginMutation } from '../hooks/apis/authapis';
import Auth from '../hooks/auth'
import { useNavigate } from 'react-router-dom';
import { Notification } from '../components/Notification';
function Login() {
  const navigate = useNavigate()
  const auth = Auth
  const { mutateAsync:loginMutation, isError } = useLoginMutation()
  React.useEffect(()=>{
    if (auth.isAuthenticated()){
      navigate("/")
    }
  })
  return (
    <>
    <Fragment>
    <div className="modernForm">
  <div className="imageSection">
    
      <div className="overlay"></div>
      
    <div className="textInside">
      <h1>Welcome Back</h1>
      <p className="tagLine">Login</p>
    </div>
    
  </div>
  <div className="contactForm">
    <h1>Login</h1>
    <Fragment>
        <Formik
          initialValues={{
            email: "",
            password: "",
            submit: null
          }}
          validationSchema={Yup.object().shape({
            
            email: Yup.string()
              .email("Invalid Email Provided")
              .required("Email is Required"),
            password: Yup.string().required("Password Required").min(6)
          })}
          onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
            setSubmitting(true)
            loginMutation({
              email: values.email,
              password: values.password
            }).then(res=>{
              if (res){
                auth.setAuthToken(res?.token)
                setSubmitting(false)
                navigate(-1)
              }else{
                setSubmitting(false)
                setErrors({
                  submit: res?.message ?? "Failed! Error Trying to login"
                })
              }
            }).catch(err=>{
              setSubmitting(false)
              setErrors({
                submit: err?.message ?? "Failed! Error Trying to login"
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
                <label htmlFor="fullName">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  id="fullName"
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
                <label htmlFor="fullName">Password</label>
                <input
                  type="password"
                  name="password"
                  id="fullName"
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
                  Remember Me
                </label>
                {
                touched.terms && errors.terms && (
                    <p className="form-error">{errors.terms}</p>
                )
               }
              </div>
              {
               ( isError || errors.submit )&& (
                  <Notification isSuccess={false} style={{marginTop:12}} text={errors.submit}/>
                )
              }
              <button type="submit" className="submit" disabled={isSubmitting} >
                { isSubmitting ?  <Loader/> : 'Login' }
              </button>
            </form>
          )}
        </Formik>
      </Fragment>
  </div>
</div>
    </Fragment>
    <Footer/>
    </>

  )
}

export default Login