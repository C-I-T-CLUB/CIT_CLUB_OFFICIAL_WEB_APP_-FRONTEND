import React from 'react'
import arrowDown from '../assets/cit club design/icon/arrow-down-svgrepo-com.svg';
import andrroid from '../assets/cit club design/illustrations/undraw-android.svg';
import exams from '../assets/cit club design/illustrations/undraw_exams_g4ow.svg';
import codindLady from '../assets/cit club design/illustrations/lady_coding.svg';
import '../assets/css/App.css';
import '../assets/css/Main.css';
import '../assets/css/SideNavigation.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
      {/*  This is the header section  */}
      <Header />
      <Hero/>
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
      <Footer />
    </>
  )
}

export default Home