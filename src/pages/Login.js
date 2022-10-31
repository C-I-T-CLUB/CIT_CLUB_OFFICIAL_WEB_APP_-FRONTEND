import React from 'react'
import "../assets/css/OurTeam.css"
import "../assets/css/Heading.css"
import "../assets/css/App.css"
import "../assets/css/Carosel.css"
import "../assets/css/Footer.css"
import "../assets/css/Main.css"
import "../assets/css/SideNavigation.css"
import "../assets/css/Login.css"

function Login() {
  return (
    <>
        <main className="login_main">
            <section className="section_position">
            <form>
                <span className="login_caption">Login</span>
                <div className="input_section">
                <div className="spacing_section">
                    <label htmlFor="usrname"> Username</label>
                    <input
                    className="input_box"
                    type="text"
                    name="username"
                    id="usrname"
                    maxLength={12}
                    placeholder="Username"
                    required=""
                    />
                </div>
                <div className="spacing_section">
                    <label htmlFor="psword"> password</label>
                    <input
                    className="input_box"
                    type="password"
                    name="password"
                    id="psword"
                    minLength={8}
                    maxLength={50}
                    placeholder="password"
                    required=""
                    />
                </div>
                <div>
                    <input className="chkbox_style " type="checkbox" name="checkbox" />
                    <label>
                    Remember <span className="tranform_me">me</span>
                    </label>
                </div>
                <div className="link_section">
                    <a href="#" className="forgot_link">
                    forgot password?{" "}
                    </a>
                    <a href="/SignUp" className="signup_link">
                    sign up
                    </a>
                </div>
                <div className="btn_section">
                    <button className="login_btn"> login</button>
                </div>
                </div>
            </form>
            </section>
        </main>
        {/*[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]*/}
    </>

  )
}

export default Login