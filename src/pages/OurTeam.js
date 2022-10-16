import React from 'react'
import "../assets/css/OurTeam.css"
import "../assets/css/Heading.css"
import "../assets/css/App.css"
import "../assets/css/Carosel.css"
import "../assets/css/Footer.css"
import "../assets/css/Main.css"
import "../assets/css/SideNavigation.css"
import arrowDown from '../assets/cit club design/icon/arrow-down-svgrepo-com.svg'
import Header from '../components/Header'
import Footer from '../components/Footer'



function OurTeam() {
  return (
    <>
        <Header />
        {/*[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]*/}
        <main className="main_ourTeam">
            <section className="heading">
            <h2 className="heading_secondary spacing_ourTeam">meet our team</h2>
            </section>
            <section>
            <div className="team_grid">
                {" "}
                {/*Displaying cards in a row*/}
                <div className="team_card">
                {" "}
                {/*Display card*/}
                <div className="card_side front">
                    {" "}
                    {/*Display card frontside*/}
                    <div>
                    <img
                        src={require('../assets/img/images_ourTeam/teacher karis.png')}
                        alt="Kelvin Kariuki"
                        className="profile_photo"
                        srcSet=""
                    />
                    </div>
                    <h4 className="heading_tertiary">kelvin Kariuki</h4>
                    <p className="description">Club Patron</p>
                </div>
                <div className="card_side back">
                    {" "}
                    {/*Display card backside*/}
                    <h3 className="heading_tertiary">Kelvin Kariuki</h3>
                    <p className="description formating_font">
                    <span className="profile">
                        Assistant Lecturer Multimedia University of Kenya Faculty of
                        Computing and Information Technology
                    </span>
                    <span className="funfacts">
                        <span className="span_heading">fun facts</span> :
                        <span>The Lord is my Shepherd</span>
                    </span>
                    <span className="interest">
                        <span className="span_heading">Interest</span> : <span />{" "}
                        <span /> <span />
                    </span>
                    <span className="social">
                        <span>
                        <a
                            href="mailto:kkariuki@mmu.ac.ke"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fas fa-envelope-open-text" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://www.linkedin.com/in/kelvin-kariuki-tr-karis/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://twitter.com/@teacherkaris"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        </span>
                    </span>
                    </p>
                </div>
                </div>
                <div className="team_card">
                {" "}
                {/*Display card*/}
                <div className="card_side front">
                    {" "}
                    {/*Display card frontside*/}
                    <div>
                    <img
                        src={require('../assets/img/images_ourTeam/paullaster.jpg')}
                        alt="Paullaster Okoth"
                        className="profile_photo"
                        srcSet=""
                    />
                    </div>
                    <div>
                    <h3 className="heading_tertiary">paullaster Okoth</h3>
                    <p className="description">Club Chairperson</p>
                    </div>
                </div>
                <div className="card_side back">
                    {" "}
                    {/*Display card backside*/}
                    <h3 className="heading_tertiary">paullaster okoth</h3>
                    <p className="description formating_font">
                    <span className="profile">
                        developer, samasource kenya. Fullstack Engineer (MongoDB,
                        Node.js, React.js). Machine Learning Engineer, Python Developer
                    </span>
                    <span className="funfacts">
                        <span className="span_heading">fun facts</span> :
                        <span>passionate coder</span>
                    </span>
                    <span className="interest">
                        <span className="span_heading">Interest</span> :{" "}
                        <span>deep Learning</span> ,<span>opensource</span>,{" "}
                        <span>tech community</span>˙
                    </span>
                    <span className="social">
                        <span>
                        <a
                            href="https://github.com/paullaster"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-github fa-1x" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://linkedin.com/in/paullaster"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://twitter.com/@PaullasterOkoth"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        </span>
                    </span>
                    </p>
                </div>
                </div>
                <div className="team_card">
                {" "}
                {/*Display card*/}
                <div className="card_side front">
                    {" "}
                    {/*Display card frontside*/}
                    <div>
                    <img
                        src={require('../assets/img/images_ourTeam/steve.jpg')}
                        alt="Steve"
                        className="profile_photo"
                        srcSet=""
                    />
                    </div>
                    <div>
                    <h3 className="heading_tertiary">Stephen Kamau</h3>
                    <p className="description">Vice Chairperson</p>
                    </div>
                </div>
                <div className="card_side back">
                    {" "}
                    {/*Display card backside*/}
                    <h3 className="heading_tertiary">stephen kamau</h3>
                    <p className="description formating_font">
                    <span className="profile">
                        Computer Science student. Backend python developer
                    </span>
                    <span className="funfacts">
                        <span className="span_heading">fun facts</span> :
                        <span>very introvert</span>
                    </span>
                    <span className="interest">
                        <span className="span_heading">Interest</span> :{" "}
                        <span>machine Learning</span> ,<span>computer vision</span>,{" "}
                        <span>natural language processing</span>˙
                    </span>
                    <span className="social">
                        <span>
                        <a
                            href="https://github.com/stephen-kamau"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-github fa-1x" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://www.linkedin.com/in/stephen-kamau-54bbba177/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://twitter.com/@kamashstivec"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        </span>
                    </span>
                    </p>
                </div>
                </div>
                <div className="team_card">
                {" "}
                {/*Display card*/}
                <div className="card_side front">
                    {" "}
                    {/*Display card frontside*/}
                    <div>
                    <img
                        src={require('../assets/img/images_ourTeam/brendamwangi.CR2')}
                        alt="Brenda Mwangi"
                        className="profile_photo"
                        srcSet=""
                    />
                    </div>
                    <div>
                    <h3 className="heading_tertiary">𝔅renda mwangi</h3>
                    <p className="description">Club Treasurer</p>
                    </div>
                </div>
                <div className="card_side back">
                    {" "}
                    {/*Display card backside*/}
                    <h3 className="heading_tertiary">𝔅renda Mwangi</h3>
                    <p className="description formating_font">
                    <span>
                        Fullstack Engineer Current Student in the Multimedia University
                        of Kenya
                    </span>
                    <span className="interest">
                        <span className="span_heading">Interest</span>:{" "}
                        <span>Tech community</span>, <br /> <span />{" "}
                        <span>Web development</span> <span />
                    </span>
                    <span className="social">
                        <span>
                        <a
                            href="https://github.com/Brenda-Mwangi"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-github fa-1x" />
                        </a>
                        </span>
                        <span>
                        <a href="https://" target="_blank" className="social_link" rel="noreferrer">
                            <i className="fab fa-linkedin" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://twitter.com/@ShikuMw23080963"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        </span>
                    </span>
                    </p>
                </div>
                </div>{" "}
                <div className="team_card">
                {" "}
                {/*Display card*/}
                <div className="card_side front">
                    {" "}
                    {/*Display card frontside*/}
                    <div>
                    <img
                        src={require('../assets/img/images_ourTeam/grace.png')}
                        alt="Grace Maluki"
                        className="profile_photo"
                        srcSet=""
                    />
                    </div>
                    <div>
                    <h3 className="heading_tertiary">grace maluki</h3>
                    <p className="description">Club secretary</p>
                    </div>
                </div>
                <div className="card_side back">
                    {" "}
                    {/*Display card backside*/}
                    <h3 className="heading_tertiary">grace maluki</h3>
                    <p className="description formating_font">
                    <span className="profile">
                        Software engineering student. Developer
                    </span>
                    <span className="funfacts">
                        <span className="span_heading">fun facts</span> :
                        <span />
                    </span>
                    <span className="interest">
                        <span className="span_heading">interest</span>{" "}
                        <span className="span_heading" /> : <span />
                        <span /> <span />
                    </span>
                    <span className="social">
                        <span>
                        <a
                            href="https://github.com/gracie2.png"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-github fa-1x" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://www.linkedin.com/in/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        </span>
                    </span>
                    </p>
                </div>
                </div>{" "}
                <div className="team_card">
                {" "}
                {/*Display card*/}
                <div className="card_side front">
                    {" "}
                    {/*Display card frontside*/}
                    <div>
                    <img
                        src={require('../assets/img/images_ourTeam/vincent.jpg')}
                        alt="Vincent"
                        className="profile_photo"
                        srcSet=""
                    />
                    </div>
                    <div>
                    <h3 className="heading_tertiary">Vincent kipng'eno</h3>
                    <p className="description">Organising secretary</p>
                    </div>
                </div>
                <div className="card_side back">
                    {" "}
                    {/*Display card backside*/}
                    <h3 className="heading_tertiary">Vicent kipeng'eno</h3>
                    <p className="description formating_font">
                    <span className="profile">
                        software engineering student. Android developer
                    </span>
                    <span className="funfacts">
                        <span className="span_heading">fun facts</span> :
                        <span />
                    </span>
                    <span className="interest">
                        <span className="span_heading">Interest</span> :{" "}
                        <span>Mobile Developement</span>
                        <span />
                        <span />;
                    </span>
                    <span className="social">
                        <span>
                        <a
                            href="https://github.com/vincent-kipngeno"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-github fa-1x" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://www.linkedin.com/in/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        </span>
                    </span>
                    </p>
                </div>
                </div>{" "}
                <div className="team_card">
                {" "}
                {/*Display card*/}
                <div className="card_side front">
                    {" "}
                    {/*Display card frontside*/}
                    <div>
                    <img
                        src={require('../assets/img/images_ourTeam/dan.jpeg')}
                        alt="Dan Kipchirchir"
                        className="profile_photo"
                        srcSet=""
                    />
                    </div>
                    <div>
                    <h3 className="heading_tertiary">dan Kipchirchir</h3>
                    <p className="description">Lead, Web Master</p>
                    </div>
                </div>
                <div className="card_side back">
                    {" "}
                    {/*Display card backside*/}
                    <h3 className="heading_tertiary">Dancun Kipchirchir</h3>
                    <p className="description formating_font">
                    <span className="profile">
                        BSC Information Technology student. Django developer <br />{" "}
                        Backend python developer
                    </span>
                    <span className="funfacts">
                        <span className="span_heading">fun facts</span> :
                        <span />
                    </span>
                    <span className="interest">
                        <span className="span_heading">Interest</span> :{" "}
                        <span>machine Learning</span> ,<span>computer vision</span>,{" "}
                        <span>natural language processing</span>˙
                    </span>
                    <span className="social">
                        <span>
                        <a
                            href="https://github.com/paymasterMax"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-github fa-1x" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://www.linkedin.com/in/dan-k-290359182/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://twitter.com/@codemonste"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        </span>
                    </span>
                    </p>
                </div>
                </div>{" "}
                <div className="team_card">
                {" "}
                {/*Display card*/}
                <div className="card_side front">
                    {" "}
                    {/*Display card frontside*/}
                    <div>
                    <img
                        src={require('../assets/img/images_ourTeam/gideon.jpeg')}
                        alt="Gideon Karugo"
                        className="profile_photo"
                        srcSet=""
                    />
                    </div>
                    <div>
                    <h3 className="heading_tertiary">gideon Karugo</h3>
                    <p className="description">Web Master</p>
                    </div>
                </div>
                <div className="card_side back">
                    {" "}
                    {/*Display card backside*/}
                    <h3 className="heading_tertiary">gideon karugo</h3>
                    <p className="description formating_font">
                    <span className="profile">
                        BSC Computer Science student. Developer <br /> Business oriented
                    </span>
                    <span className="funfacts">
                        <span className="span_heading">fun facts</span> :
                        <span>Business oriented</span>
                    </span>
                    <span className="interest">
                        <span className="span_heading">Interest</span> :{" "}
                        <span>money</span>
                    </span>
                    <span className="social">
                        <span>
                        <a
                            href="https://github.com/Ledziiieet"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-github fa-1x" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://www.linkedin.com/in/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        </span>
                    </span>
                    </p>
                </div>
                </div>{" "}
                <div className="team_card">
                {" "}
                {/*Display card*/}
                <div className="card_side front">
                    {" "}
                    {/*Display card frontside*/}
                    <div>
                    <img
                        src={require('../assets/img/images_ourTeam/humphreyspinto.jpg')}
                        alt="Humphreys Pinto"
                        className="profile_photo"
                        srcSet=""
                    />
                    </div>
                    <div>
                    <h3 className="heading_tertiary">humphreys pinto</h3>
                    <p className="description">Lead, Cyber Security</p>
                    </div>
                </div>
                <div className="card_side back">
                    {" "}
                    {/*Display card backside*/}
                    <h3 className="heading_tertiary">Humphreys Pinto</h3>
                    <p className="description formating_font">
                    <span className="profile">
                        BSC Software engineering student. Cyber securit specialist{" "}
                        <br />
                    </span>
                    <span className="funfacts">
                        <span className="span_heading">fun facts</span> :
                        <span>Very introvert</span>
                    </span>
                    <span className="interest">
                        <span className="span_heading">Interest</span> :{" "}
                        <span>Cyber security</span>
                    </span>
                    <span className="social">
                        <span>
                        <a
                            href="https://github.com/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-github fa-1x" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://www.linkedin.com/in/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        </span>
                    </span>
                    </p>
                </div>
                </div>{" "}
                <div className="team_card">
                {" "}
                {/*Display card*/}
                <div className="card_side front">
                    {" "}
                    {/*Display card frontside*/}
                    <div>
                    <img
                        src={require('../assets/img/images_ourTeam/paminus.jpeg')}
                        alt="Paminus Murungi"
                        className="profile_photo"
                        srcSet=""
                    />
                    </div>
                    <div>
                    <h3 className="heading_tertiary">paminus Murungi</h3>
                    <p className="description">Lead, Web Engineering</p>
                    </div>
                </div>
                <div className="card_side back">
                    {" "}
                    {/*Display card backside*/}
                    <h3 className="heading_tertiary">paminus king'ori</h3>
                    <p className="description formating_font">
                    <span className="profile">
                        BSC Computer Science student. Frontend developer <br /> UX/UI
                        designer
                    </span>
                    <span className="funfacts">
                        <span className="span_heading">fun facts</span> :
                        <span />
                    </span>
                    <span className="interest">
                        <span className="span_heading">Interest</span> :{" "}
                        <span>UX/UI</span>
                    </span>
                    <span className="social">
                        <span>
                        <a
                            href="https://github.com/paminus-kingori"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-github fa-1x" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://www.linkedin.com/in/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://twitter.com/@oripaminus"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        </span>
                    </span>
                    </p>
                </div>
                </div>{" "}
                <div className="team_card">
                {" "}
                {/*Display card*/}
                <div className="card_side front">
                    {" "}
                    {/*Display card frontside*/}
                    <div>
                    <img
                        src={require('../assets/img/images_ourTeam/shadrack.jpg')}
                        alt="Kiprotich Shadrack"
                        className="profile_photo"
                        srcSet=""
                    />
                    </div>
                    <div>
                    <h3 className="heading_tertiary">Kiprotich shadrack</h3>
                    <p className="description">Co-Lead, Web Engineering</p>
                    </div>
                </div>
                <div className="card_side back">
                    {" "}
                    {/*Display card backside*/}
                    <h3 className="heading_tertiary">Shadrack Kiprotich</h3>
                    <p className="description formating_font">
                    <span className="profile">
                        BSC Information Technology student. Developer
                    </span>
                    <span className="funfacts">
                        <span className="span_heading">fun facts</span> :
                        <span />
                    </span>
                    <span className="interest">
                        <span className="span_heading">Interest</span> : <span />
                    </span>
                    <span className="social">
                        <span>
                        <a
                            href="https://github.com/Kiprotich78"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-github fa-1x" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://www.linkedin.com/in/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        </span>
                    </span>
                    </p>
                </div>
                </div>{" "}
                <div className="team_card">
                {" "}
                {/*Display card*/}
                <div className="card_side front">
                    {" "}
                    {/*Display card frontside*/}
                    <div>
                    <img
                        src={require('../assets/img/images_ourTeam/oyamo.jpg')}
                        alt="Brian Oyamo"
                        className="profile_photo"
                        srcSet=""
                    />
                    </div>
                    <div>
                    <h3 className="heading_tertiary">brian oyamo</h3>
                    <p className="description">Lead, Mobile Development</p>
                    </div>
                </div>
                <div className="card_side back">
                    {" "}
                    {/*Display card backside*/}
                    <h3 className="heading_tertiary">Oyamo Brian</h3>
                    <p className="description formating_font">
                    <span className="profile">
                        BSC Software engineering student. Adnroid Developer <br />{" "}
                        Goland Developer
                        <br /> Backend API Designer.
                    </span>
                    <span className="funfacts">
                        <span className="span_heading">fun facts</span> :
                        <span />
                    </span>
                    <span className="interest">
                        <span className="span_heading">Interest</span> :{" "}
                        <span>Mobile developemt</span>
                    </span>
                    <span className="social">
                        <span>
                        <a
                            href="https://github.com/oyamo-brian"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-github fa-1x" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://www.linkedin.com/in/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://twitter.com/@oyamobrian"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        </span>
                    </span>
                    </p>
                </div>
                </div>{" "}
                <div className="team_card">
                {" "}
                {/*Display card*/}
                <div className="card_side front">
                    {" "}
                    {/*Display card frontside*/}
                    <div>
                    <img
                        src={require('../assets/img/images_ourTeam/frankline mongare.png')}
                        alt="Franklin Mong'are"
                        className="profile_photo"
                        srcSet=""
                    />
                    </div>
                    <div>
                    <h3 className="heading_tertiary">franklin mong'are</h3>
                    <p className="description">Co-Lead, Mobile Development</p>
                    </div>
                </div>
                <div className="card_side back">
                    {" "}
                    {/*Display card backside*/}
                    <h3 className="heading_tertiary">franklin mong'are</h3>
                    <p className="description formating_font">
                    <span className="profile">
                        BSC Information Technology student. <br />
                        Android Developer
                    </span>
                    <span className="funfacts">
                        <span className="span_heading">fun facts</span> :
                        <span />
                    </span>
                    <span className="interest">
                        <span className="span_heading">Interest</span> :{" "}
                        <span>Adnroid development</span>
                    </span>
                    <span className="social">
                        <span>
                        <a
                            href="https://github.com/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-github fa-1x" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://www.linkedin.com/in/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        </span>
                    </span>
                    </p>
                </div>
                </div>{" "}
                <div className="team_card">
                {" "}
                {/*Display card*/}
                <div className="card_side front">
                    {" "}
                    {/*Display card frontside*/}
                    <div>
                    <img
                        src={require('../assets/img/images_ourTeam/purity.JPG')}
                        alt="Purity Nyakundi"
                        className="profile_photo"
                        srcSet=""
                    />
                    </div>
                    <div>
                    <h3 className="heading_tertiary">Purity Nyakundi</h3>
                    <p className="description">Co-Lead, Data Science</p>
                    </div>
                </div>
                <div className="card_side back">
                    {" "}
                    {/*Display card backside*/}
                    <h3 className="heading_tertiary">Purity Nyakundi</h3>
                    <p className="description formating_font">
                    <span className="profile">
                        BSC Software engineering student. <br />
                        Data Scientist <br />R and Python developer
                    </span>
                    <span className="funfacts">
                        <span className="span_heading">fun facts</span> :
                        <span />
                    </span>
                    <span className="interest">
                        <span className="span_heading">Interest</span> :{" "}
                        <span>Data science</span>,<span>machine learning</span>
                    </span>
                    <span className="social">
                        <span>
                        <a
                            href="https://github.com/PurityNyakundi"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-github fa-1x" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://www.linkedin.com/in/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        </span>
                        <span>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            className="social_link" rel="noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        </span>
                    </span>
                    </p>
                </div>
                </div>
            </div>
            </section>
        </main>
        {/* Footer section */}
        <Footer />
    </>

  )
}

export default OurTeam