import React from 'react'
import "../assets/css/OurTeam.css"
import "../assets/css/Heading.css"
import "../assets/css/App.css"
import "../assets/css/Carosel.css"
import "../assets/css/Footer.css"
import "../assets/css/Main.css"
import "../assets/css/SideNavigation.css"
import "../assets/css/Event.css"
import "../assets/css/NewEvent.css"

function NewEvent() {
  return (
    <>
        <main className="newevent_main">
            <section className="newevent_form">
                <form action="" method="post">
                <div>
                    <label className="label_style">
                    Event Title
                    <input
                        className="event_input__style"
                        type="text"
                        name="eventTitle"
                        maxLength={100}
                        id="event_title"
                        required=""
                    />
                    </label>
                </div>
                <div>
                    <label className="label_style">
                    Event Link
                    <input
                        className="event_input__style"
                        type="url"
                        name="meetUpLink"
                        required=""
                    />
                    </label>
                </div>
                <div>
                    <label className="label_style">
                    Event short description
                    <textarea
                        className="event_input__style textarea_style"
                        name="eventShortDesc"
                        id=""
                        cols={30}
                        rows={10}
                        maxLength={400}
                        required=""
                        defaultValue={""}
                    />
                    </label>
                </div>
                <div>
                    <label className="label_style">
                    Topic
                    <input
                        className="event_input__style"
                        type="text"
                        name="topic"
                        id=""
                        required=""
                    />
                    </label>
                </div>
                <div className="event_thumbnail">
                    <div className="position_style">
                    <label className="label_style position_upload-thumbnail">
                        Upload Event Thumbnail
                        <input
                        type="file"
                        multiple=""
                        accept="image/*"
                        name="eventThumbnail"
                        id="event_thumbnail"
                        style={{ display: "none" }}
                        />
                    </label>
                    </div>
                    <div>
                    <p>
                        <img
                        width={200}
                        height={200}
                        id="event_thumbnail_output"
                        className="hide_image_holder"
                        alt=''
                        />
                    </p>
                    </div>
                </div>
                <div className="schedule_agenda">
                    <h2 className="heading_secondary style-color">schedule &amp; agenda</h2>
                    <div className="dates_display">
                    <div>
                        <label className="label_style">
                        Event Starts
                        <input
                            className="event_input__style"
                            type="datetime-local"
                            name="startDate"
                            id=""
                            required=""
                        />
                        </label>
                    </div>
                    <div>
                        <label className="label_style">
                        Event Ends
                        <input
                            className="event_input__style"
                            type="datetime-local"
                            name="endDate"
                            id=""
                            required=""
                        />
                        </label>
                    </div>
                    </div>
                </div>
                <div className="event_location">
                    <h2 className="heading_secondary style-color">location</h2>
                    <div>
                    <div></div>
                    </div>
                </div>
                <div className="speaker">
                    <h2 className="heading_secondary style-color">speakers</h2>
                    <div className="speaker_input">
                    <input
                        className="event_input__style details"
                        type="text"
                        name="speakerName"
                        id=""
                        placeholder="Create speakers here"
                    />
                    </div>
                </div>
                <div className="facilitator">
                    <h2 className="heading_secondary style-color">facilitators</h2>
                    <div className="facilitator_input">
                    <input
                        className="event_input__style  details"
                        type="text"
                        name="facilitatorsName"
                        id=""
                        placeholder="Create facilitators here"
                    />
                    </div>
                </div>
                <button type="submit" className="publish_event__btn">
                    Publish Event
                </button>
                </form>
            </section>
        </main>

    </>
  )
}

export default NewEvent