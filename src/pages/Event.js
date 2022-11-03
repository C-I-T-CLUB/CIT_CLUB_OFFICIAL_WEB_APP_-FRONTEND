import React from 'react'
import "../assets/css/OurTeam.css"
import "../assets/css/Heading.css"
import "../assets/css/App.css"
import "../assets/css/Carosel.css"
import "../assets/css/Footer.css"
import "../assets/css/Main.css"
import "../assets/css/SideNavigation.css"
import "../assets/css/Event.css"
import Footer from '../components/Footer'

function Event() {
  return (
    <>
        {/*[if lt IE 7]>
            <p className="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
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
        <Footer />
    </>

  )
}

export default Event