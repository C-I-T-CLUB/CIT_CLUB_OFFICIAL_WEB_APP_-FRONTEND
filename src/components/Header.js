import React from 'react'
import { Link } from 'react-router-dom';
import arrowDown from '../assets/cit club design/icon/arrow-down-svgrepo-com.svg';
import '../assets/css/Heading.css';
import '../assets/css/SideNavigation.css';

function Header() {
  return (
    <>
        <header className="header">
          {/* <!-- The navigation links --> */}
          <nav className="row_nav">
            <Link to="/">
              <div className="nav_column">
                <img src={require('../assets/img/logo-removebg-preview.png')} alt="cit club logo" className="logo_style" />
              </div>
              </Link>
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
              <a href="javascript:void(0)" className="side_nav_close" onClick="close_nav()">&times;</a>
              <a href="./html/registration.html" className="side_nav_btn">register</a>
              <a href="/Event" className="side_nav_btn">events</a>
              <a href="#" className="side_nav_btn">support us</a>
          </div>
              <span className="open_nav__btn" onClick="open_nav()">&#9776;</span>
          
          {/* <!-- inspirations --> */}
          
      </header>
    </>
  )
}

export default Header