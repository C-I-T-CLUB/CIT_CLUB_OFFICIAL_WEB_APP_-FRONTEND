import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Loader } from '../components/Loader'
import { Fragment } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
function SignUp() {
  return (
    <>
        <Header/>
        <div class="modernForm">
  <div class="imageSection">
    {/* <div class="image">
      <div class="overlay"></div>
      <img src="https://pbs.twimg.com/media/EIQo7_zX0AAB7UD?format=jpg&name=large" alt="cit-learning" />
    </div> */}
    <div class="textInside">
      <h1>Get access to a wide arrsay of resouces</h1>
      <p class="tagLine">Register Today</p>
    </div>
  </div>
  <div class="contactForm">
    <h1>Registaration Form</h1>
    <Fragment>
        <Formik
          initialValues={{
            username: "",
            email: "",
            phone: "",
            password:"",
            terms: false

          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().max(255).required("username Name Is Required"),
            email: Yup.string()
              .email("Invalid Email Provided")
              .required("Email is Required"),
            phone: Yup.string().required("Please Enter phone number"),
            password: Yup.string().required("Please Enter Password").min(6,"Password Must Be Greater Than 6 Characters"),
            terms: Yup.bool().isTrue("Please accept Terms and Condition")
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
                <label for="fullName">Username </label>
                <input
                  type="text"
                  name="course"
                  id="fullName"
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
                <label for="fullName">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="ex: 0712345678"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.phone && errors.phone && ('error-input')}
                />
               {
                touched.phone && errors.phone && (
                    <p className="form-error">{errors.phone}</p>
                )
               }
              </div>
              <div class="name" >
                <label for="fullName">Password</label>
                <input
                  type="password"
                  name="password"
                  id="phone"
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
              <div class="checkbox">
                <input type="checkbox" id="checkbox" name="terms" required value={values.terms} onChange={handleChange} onBlur={handleBlur} />
                <label for="checkbox">
                  By signing up, you agree to the<a href="# ">Term of Service</a>
                </label>
                {
                touched.terms && errors.terms && (
                    <p className="form-error">{errors.terms}</p>
                )
               }
              </div>
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