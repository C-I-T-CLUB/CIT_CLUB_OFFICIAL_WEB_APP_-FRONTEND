import { Formik } from "formik";
import React, { Fragment } from "react";
import Footer from "../components/Footer";
import '../assets/css/Registration.css';
import * as Yup from "yup";
import { Loader } from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { Range } from "../components/Range";
import { useJoinCitMutation } from "../hooks/apis/authapis";
import { Notification } from "../components/Notification";

function Registration() {
  const navigate = useNavigate()
  const {mutateAsync:joinCitMutation,isError} = useJoinCitMutation()
  return (
    <>
      <div className="modernForm">
  <div className="imageSection">
      <div className="overlay"></div>
    <div className="textInside">
      <h1>Join a Thriving CIT community</h1>
      <p className="tagLine">Learn with great developers the beauty of Programming</p>
    </div>
    <div className="service">
      <p><span className="price">Ksh 100</span> / Month</p>
    </div>
  </div>
  <div className="contactForm">
    <h1>Sign Me Up!</h1>
    <Fragment>
        <Formik
          initialValues={{
            fname: "",
            lname: "",
            email: "",
            phone: "",
            course: "",
            rating: 5,
            designRating: 5,
            interest: "",
            other: "",
            terms: false,
            password:"",
            sumbit:null

          }}
          validationSchema={Yup.object().shape({
            fname: Yup.string().max(255).required("First Name Is Required"),
            lname: Yup.string().max(255).required("Second Name Is Required"),
            email: Yup.string()
              .email("Invalid Email Provided")
              .required("Email is Required"),
            phone: Yup.string().required("Please Enter phone number"),
            course: Yup.string().required("Please Enter Course"),
            rating: Yup.number()
              .max(10)
              .min(2)
              .required("Programming Rating Required"),
            designRating: Yup.number()
              .max(10)
              .min(2)
              .required("Design Rating Required"),
            other: Yup.string(),
            terms: Yup.bool().isTrue("Please accept Terms and Condition"),
            password: Yup.string().matches(/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,"Weak Password").required("Password Required")
          })}
          onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
            setSubmitting(true)
            delete values.terms;
            delete values.sumbit;
            joinCitMutation(values).then(res=>{
              if (res){
                setSubmitting(false)
                navigate("/Login")
              }else {
                setSubmitting(false)
                setErrors({
                  sumbit: 'Failed! Error Trying to Register'
                })
              }
            }).catch(err=>{setSubmitting(false);setErrors({
              sumbit: err?.message ?? 'Error Trying to Register'
            })})
            
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
              <div className="name" >
                <label htmlFor="fname">First Name:</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
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
              <div className="name" >
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
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
                <label htmlFor="phone">Phone Number</label>
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
              <div className="name" >
                <label htmlFor="course">Course</label>
                <input
                  type="text"
                  name="course"
                  id="course"
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
              <div className="name" >
                <label htmlFor="interest">Interest</label>
                <select
                value={values.interest}
                name="interest"
                id="interest"
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
              <div className="row-form">
                <div className="name">
                <Range value={values.rating} name="rating" onBlur={handleBlur} onChange={handleChange} label="Programming Rating"/>
                </div>
                <div className="name">
                <Range value={values.designRating} name="designRating" onBlur={handleBlur} onChange={handleChange} label="Design Rating"/>
                </div>
              </div>
              <div className="name" >
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="ex: ******"
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
                (isError || errors.sumbit) && (<Notification isSuccess={false} text={errors.sumbit}/>)
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
      <Footer />
    </>
  );
}

export default Registration;


   

