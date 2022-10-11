import React from 'react'
import arrowDown from '../assets/cit club design/icon/arrow-down-svgrepo-com.svg';
import andrroid from '../assets/cit club design/illustrations/undraw-android.svg';
import exams from '../assets/cit club design/illustrations/undraw_exams_g4ow.svg';
import codindLady from '../assets/cit club design/illustrations/lady_coding.svg';
import '../assets/css/App.css';
import '../assets/css/Main.css';
import '../assets/css/Footer.css';
import '../assets/css/Heading.css';
import '../assets/css/SideNavigation.css';

function Home() {
  return (
    <>
      {/*  This is the header section  */}
      <header className="style">
          {/* <!-- The navigation links --> */}
          <nav className="row_nav">
              <div className="nav_column">
                <img src={require('../assets/img/logo-removebg-preview.png')} alt="cit club logo" className="logo_style" />
              </div>
              <div className="nav_column nav_column__row">
                  <li className="style_list display_drop"> <a href="#">resources
                      <img  className="postion_arrow" src={arrowDown} alt="" />
                  </a>   
                        <ul className="drop_down">
                            <a href="/Resources/PastPapers">past papers</a>
                            <a href="/Resources/Projects">projects</a>
                            <a href="/Resources/Blogs">blogs</a>
                            <a href="/Resources/TechNews">tech news</a>
                            <a href="/Resources/TechInterviews">tech inverviews</a>
                        </ul>
                  </li>  
                <a  href="/Event"  className="style_list">events</a>
                <a  href="/Gallary" className="style_list">gallery</a>
                <a  href="/OurTeam" className="style_list">our team</a>
                <a  href="/FindDeveloper" className="style_list">find developer</a> 
                <li href="#" className="style_list display_drop "><a href="#">accounts
                      <img  className="postion_arrow" src={arrowDown} alt="" /></a>
                      <ul className="drop_down">
                          <a href="/SignUp">sign up</a>
                          <a href="/Login" className="btn_login_white">login</a>
                          <a href="/Registration">Join CIT CLuB</a>
                      </ul>
                  </li>       
              </div>
          </nav>
          {/* <!-- side bar navigation --> */}
          <div className="side_nav" id="side_bar__nav">
              <a href="javascript:void(0)" className="side_nav_close" onclick="close_nav()">&times;</a>
              <a href="./html/registration.html" className="side_nav_btn">register</a>
              <a href="/Event" className="side_nav_btn">events</a>
              <a href="#" className="side_nav_btn">support us</a>
          </div>
              <span className="open_nav__btn" onclick="open_nav()">&#9776;</span>
          
          {/* <!-- inspirations --> */}
          <div className="inspired">
              <a href="#" className="inspire_link"><span className="inspire_link_text">inspiration</span></a>
          </div>
          <div className="header_text">
              <div className="header_text_para">
                  <h1 className="primary_heading">started by students</h1>
              </div>
              <div className="header_text_para">
                  <h1 className="primary_heading">run by students</h1>
              </div>
          </div> 
      </header>
      {/* <!-- Main section of the page -->
      <!-- This section will display the blogs that are fetched via an API and refreshed after 24 hours --> */}
      <main className="style_main">
          {/* <!-- This is the section that appears first when user visits the website --> */}
          <section className="landing_section">
              <div className="text_div">
                  <h1 className="heading_primary lading_section_style">
                      Started by Students <br />
                      Run by Students
                  </h1>
                  <a className="join_citclub" href="/Registration">Join CIT CLUB</a>
              </div>
              <div className="img_div">
                  <img className="img_div__style" src={andrroid} alt="" />
              </div>
          </section>

          {/* <!-- resources section  --> */}
          <h2 className="section_title">Resources</h2>
          <section className="resources_section">
                  <aside className="svg_holder">
                    <img src={exams} alt="exam" className="svg_illustration" />
                  </aside>

                  <article className="resources_text">
                      <p>
                          Worried about exams? Well, worry no more,
                          CIT Club got you covered. Click below to view past paper university examinations.
                      </p>
                      <a href="/Resources" className="view_resources_btn">
                          View Resources
                      </a>
                  </article>

          </section>

          {/* <!-- projects section  --> */}
          <h2 className="section_title">Projects</h2>
          <section className="projects_section">
              <p>
                  As a club, we value practical projects that work to solve problems in our community.<br />
                  Here are some of the projects we have worked on.
              </p>

              <aside className="projects_holder">
                  {/* <!-- PWA  --> */}
                  <aside className="project_card">
                      <img src={require('../assets/cit club design/pexels-designecologist-1779487.jpg')} alt="project1" className="pro_img" />
                      <p>
                          We've made a progressive web app(PWA) and published it.
                      </p>
                      <a href="#" className="view_resources_btn">
                        View
                      </a>
                  </aside>

                  {/* <!-- project 2  --> */}
                  <aside className="project_card">
                      <img src={require('../assets/cit club design/pexels-tyler-lastovich-699122.jpg')} alt="project1" className="pro_img" />
                      <p>
                          We've made an android app and published it.
                      </p>
                      <a href="#" className="view_resources_btn">
                        View
                      </a>
                  </aside>

                  {/* <!-- PWA  --> */}
                  <aside className="project_card">
                      <img src={require('../assets/cit club design/pexels-designecologist-1779487.jpg')} alt="project1" className="pro_img" />
                      <p>
                          We've made a progressive web app(PWA) and published it.
                      </p>
                      <a href="#" className="view_resources_btn">
                        View
                      </a>
                  </aside>
              </aside>

              <a href="/Resouces/Projects" className="more_projects_btn">
                <span> 
                    More Projects 
                  <img src={arrowDown} alt="next" className="twist_icon" />
                  <img src={arrowDown} alt="next" className="twist_icon" />
              </span>
              </a>
          </section>

          {/* <!-- developer section  --> */}
          <h2 className="section_title">Find a developer</h2>
          <section className="dev_section">
              <article className="resources_text">
                  <p>
                      Have a project you are working on and in need of <span className="highlight_text">professional</span>
                      I.T skills? Find a <span className="highlight_text">compenent</span> developer amongst us.
                  </p>
                  <a href="/FindDeveloper" className="view_resources_btn">
                      Find Developer
                  </a>
              </article>
              <aside className="svg_holder svg_bg">
                  <img src={codindLady} alt="developer" className="svg_illustration" />
              </aside>
          </section>

      </main>
      {/* <!-- Footer section --> */}
      <footer>
          <div className="part">
              <img src={require('../assets/img/logo-removebg-preview.png')} alt="cit club logo" srcset={require('../assets/img/logo-removebg-preview.png')} className="footer_logo" />
          </div>
          <div className="part">
              <h3 className="footer_title">
                  Our Address
              </h3>
              <ul>
                  <li>Nairobi, Kenya</li>
                  <li>Multimedia University Of Kenya</li>
                  <li>P.O Box 15653 - 00503</li>
              </ul>
          </div>
          <div className="part">
              <h3 className="footer_title">
                  Call Us
              </h3>
              <ul>
                  <li><i className="fas fa-phone-alt"></i> Paullaster Okoth </li>
                  <li><i className="fas fa-phone-alt"></i> Stephen Kamau </li>
                  <li><i className="fas fa-phone-alt"></i> Dan Santiago </li>
              </ul>
          </div>
          <div className="part">
              <h3 className="footer_title">
                  Sponsors
              </h3>
              <ul>
                  <li>Multimedia University Of Kenya</li>
                  <li>Virdismart Global</li>
                  <li>Meta Ajax Technology Agencies</li>
              </ul>
          </div>
          <div className="part">
              <h3 className="footer_title">
                  Follow Us
              </h3>
              <ul>
                  <li><i className="fab fa-twitter"></i> Twitter</li>
                  <li><i className="fab fa-github"></i> Github</li>
                  <li><i className="fas fa-envelope"></i> Email</li>
                  <li><i className="fab fa-whatsapp"></i> Whatsapp</li>
              </ul>
          </div>
      </footer>
    </>
  )
}

export default Home