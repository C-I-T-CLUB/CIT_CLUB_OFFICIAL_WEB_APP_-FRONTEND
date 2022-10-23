import { Formik } from "formik";
import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../assets/css/Registration.css';
import * as Yup from "yup";
import { Loader } from "../components/Loader";

function Registration() {
  return (
    <>
      <Header />
      <div class="modernForm">
  <div class="imageSection">
    {/* <div class="image">
      <div class="overlay"></div>
      <img src="https://pbs.twimg.com/media/EIQo7_zX0AAB7UD?format=jpg&name=large" alt="cit-learning" />
    </div> */}
    <div class="textInside">
      <h1>Join a Thriving CIT community</h1>
      <p class="tagLine">Register</p>
    </div>
    <div class="service">
      <p><span class="price">Ksh 100</span> / Month</p>
    </div>
  </div>
  <div class="contactForm">
    <h1>Become A Member Of The CIT club</h1>
    <Fragment>
        <Formik
          initialValues={{
            fname: "",
            lname: "",
            email: "",
            phone: "",
            course: "",
            rating: "",
            designRating: "",
            interest: "",
            other: "",
            terms: false

          }}
          validationSchema={Yup.object().shape({
            fname: Yup.string().max(255).required("First Name Is Required"),
            lname: Yup.string().max(255).required("Second Name Is Required"),
            email: Yup.string()
              .email("Invalid Email Provided")
              .required("Email is Required"),
            phone: Yup.string().required("Please Enter phone number"),
            course: Yup.string().required("Please Enter Course"),
            // rating: Yup.number()
            //   .max(10)
            //   .min(2)
            //   .required("Programming Rating Required"),
            // designRating: Yup.number()
            //   .max(10)
            //   .min(2)
            //   .required("Design Rating Required"),
            other: Yup.string(),
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
                <div className="row-form">
              <div class="name" >
                <label for="fullName">First Name:</label>
                <input
                  type="text"
                  name="fname"
                  id="fullName"
                  placeholder="ex: John"
                  value={values.fname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.fname && errors.fname && ('error-input')}
                />
               {
                touched.fname && errors.fname && (
                    <p className="form-error">{errors.fname}</p>
                )
               }
              </div>
              <div class="name" >
                <label for="fullName">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  id="fullName"
                  placeholder="ex: Doe"
                  value={values.lname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.lname && errors.lname && ('error-input')}
                />
               {
                touched.lname && errors.lname && (
                    <p className="form-error">{errors.lname}</p>
                )
               }
              </div>
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
                <label for="fullName">Course</label>
                <input
                  type="text"
                  name="course"
                  id="fullName"
                  placeholder="ex: Bachelor of Science In Computer Science"
                  value={values.course}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.course && errors.course && ('error-input')}
                />
               {
                touched.course && errors.course && (
                    <p className="form-error">{errors.course}</p>
                )
               }
              </div>
              <div class="name" >
                <label for="fullName">Interest</label>
                <select
                value={values.interest}
                name="interest"
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.interest && errors.interest && ('error-input')}
                >
                    <option>Interest</option>
                    <option>Example </option>
                </select>
               
               {
                touched.interest && errors.interest && (
                    <p className="form-error">{errors.interest}</p>
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
      <Footer />
    </>
  );
}

export default Registration;


   

