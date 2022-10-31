import React from 'react'
import "../assets/css/OurTeam.css"
import "../assets/css/Heading.css"
import "../assets/css/App.css"
import "../assets/css/Carosel.css"
import "../assets/css/Footer.css"
import "../assets/css/Main.css"
import "../assets/css/SideNavigation.css"
import "../assets/css/Event.css"
import arrowDown from '../assets/cit club design/icon/arrow-down-svgrepo-com.svg'

function Event() {
  return (
    <>
        <header className="style">
            {/* The navigation links */}
            <nav className="row_nav">
            <div className="nav_column">
                <a href="/">        
                {" "}
                <img
                    src={require('../assets/img/logo-removebg-preview.png')}
                    alt="cit club logo"
                    srcSet={require('../assets/img/logo-removebg-preview.png')}
                    className="logo_style"
                />
                </a>
            </div>
            <div className="nav_column nav_column__row">
                <li className="style_list display_drop">
                {" "}
                <a href="/Resources">
                    resources
                    <img
                    className="postion_arrow"
                    src={arrowDown}
                    alt=""
                    />
                </a>
                <ul className="drop_down">
                    <a href="/Resources/PastPapers">past papers</a>
                    <a href="/Resources/Projects">projects</a>
                    <a href="/Resources/Blogs">blogs</a>
                    <a href="/Resources/TechNews">tech news</a>
                    <a href="/Resources/TechInterviews">tech inverviews</a>
                </ul>
                </li>
                <a href="/Event" className="style_list">
                events
                </a>
                <a href="/Gallary" className="style_list">
                gallery
                </a>
                <a href="/OurTeam" className="style_list">
                our team
                </a>
                <a href="/FindDeveloper" className="style_list">
                find developer
                </a>
                <li href="#" className="style_list display_drop ">
                <a href="#">
                    accounts
                    <img
                    className="postion_arrow"
                    src={arrowDown}
                    alt=""
                    />
                </a>
                <ul className="drop_down">
                    <a href="/SignUp">sign up</a>
                    <a href="/Login" className="btn_login_white">
                    login
                    </a>
                    <a href="/Registration">Join CIT CLUB</a>
                </ul>
                </li>
            </div>
            </nav>
            {/* side bar navigation */}
            <div className="side_nav" id="side_bar__nav">
            <a
                href="javascript:void(0)"
                className="side_nav_close"
                onclick="close_nav()"
            >
                ×
            </a>
            <a href="/Registration" className="side_nav_btn">
                register
            </a>
            <a href="/Event" className="side_nav_btn">
                events
            </a>
            <a href="#" className="side_nav_btn">
                support us
            </a>
            </div>
            <span className="open_nav__btn" onclick="open_nav()">
            ☰
            </span>
            {/* inspirations */}
            <div className="inspired">
            <a href="#" className="inspire_link">
                <span className="inspire_link_text">inspiration</span>
            </a>
            </div>
        </header>
        {/*[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]*/}
        <main className="event">
            <section className="create_event_btn">
            <a href="/NewEvent" className="new_event__btn" id="eventBtn">
                <i className="fas fa-plus style-plus-icon" /> Create new event
            </a>
            </section>
            <section className="upcoming_events">
            <h2 className="heading_secondary style-color">
                CIT CLUB MMU Upcoming events
            </h2>
            <div className="display_upcoming_event" id="display_upcoming__event">
                <div className="event_slides" />
                <div className="event_slides" />
                <div className="event_slides" />
            </div>
            <span className="Left_angle_bracket" id="Left_angle_bracket">
                ⟨
            </span>
            <span className="Right_angle_bracket" id="Right_angle_bracket">
                ⟩
            </span>
            </section>
            <section className="completed_events">
            <h2 className="heading_secondary style-color">Completed events</h2>
            <div className="display_completed__events" id="display_completed__events">
                <div className="completed" />
            </div>
            </section>
        </main>
    </>

  )
}

export default Event