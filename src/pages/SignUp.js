import React from 'react'
import "../assets/css/Heading.css"
import "../assets/css/App.css"
import "../assets/css/Footer.css"
import "../assets/css/Main.css"
import "../assets/css/SignUp.css"

function SignUp() {
  return (
    <>
        <main className="signup_main">
            <section className="signup_section">
            <form method="post" id="sign_up__form">
                <span className="signup_caption">Create an MMU CIT club account</span>
                <div className="form_section__div">
                <label className="label_style">
                    Email <span className="star">*</span>
                    <input
                    className="signup_input"
                    type="email"
                    name="email"
                    maxLength={50}
                    id="useremail"
                    required=""
                    placeholder="someoneelse@mmu.ac.ke"
                    />
                </label>
                </div>
                <div className="form_section__div">
                <label className="label_style">
                    Username <span className="star">*</span>
                    <input
                    className="signup_input"
                    type="text"
                    name="username"
                    id="usrname"
                    placeholder="maximum of 12 characters"
                    minLength={4}
                    maxLength={12}
                    required=""
                    />
                </label>
                </div>
                <div className="form_section__div">
                <label className="label_style">
                    Password <span className="star">*</span>
                    <input
                    className="signup_input"
                    type="password"
                    minLength={8}
                    maxLength={50}
                    name="password"
                    id="pssword"
                    required=""
                    />
                </label>
                </div>
                <div className="form_section__div">
                <label className="label_style">
                    confirm Password <span className="star">*</span>
                    <input
                    className="signup_input"
                    type="password"
                    minLength={8}
                    maxLength={50}
                    name="cpassword"
                    id="cpssword"
                    required=""
                    />
                </label>
                </div>
                <button className="sigup_btn">
                <i className="fas fa-lock-alt" />
                create account
                </button>
            </form>
            <span className="agreement_txt">
                By clicking create account you agree to our <a href="#">Terms</a> and
                have read and acknowledged our <a href="#">Privacy Statements</a>
            </span>
            </section>
            <section className="back_btn">
            <a href="/">← back</a>
            </section>
        </main>
        {/*[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]*/}
    </>

  )
}

export default SignUp