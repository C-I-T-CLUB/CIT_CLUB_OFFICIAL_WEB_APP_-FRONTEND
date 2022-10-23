import React, { Fragment } from 'react'
import "../assets/css/Registration.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Loader } from '../components/Loader';

function Login() {
  return (
    <>
    <Header/>
    <Fragment>
    <div class="modernForm">
  <div class="imageSection">
    {/* <div class="image">
      <div class="overlay"></div>
      <img src="https://pbs.twimg.com/media/EIQo7_zX0AAB7UD?format=jpg&name=large" alt="cit-learning" />
    </div> */}
    <div class="textInside">
      <h1>Welcome Back</h1>
      <p class="tagLine">Login</p>
    </div>
    
  </div>
  <div class="contactForm">
    <h1>Login</h1>
    <Fragment>
        <Formik
          initialValues={{
            email: "",
            password: "",

          }}
          validationSchema={Yup.object().shape({
            
            email: Yup.string()
              .email("Invalid Email Provided")
              .required("Email is Required"),
            password: Yup.string().required("Password Required").min(6)
          })}
          onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
            setSubmitting(true)
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
                
              <div class="name" >
                <label for="fullName">Email Address:</label>
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
              <div class="name" >
                <label for="fullName">Password</label>
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
              
              
              <div class="checkbox">
                <input type="checkbox" id="checkbox" name="terms" required value={values.terms} onChange={handleChange} onBlur={handleBlur} />
                <label for="checkbox">
                  Remember Me
                </label>
                {
                touched.terms && errors.terms && (
                    <p className="form-error">{errors.terms}</p>
                )
               }
              </div>
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