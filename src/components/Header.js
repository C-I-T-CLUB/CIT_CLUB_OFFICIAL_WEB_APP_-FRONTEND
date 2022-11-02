import React from 'react'
import { useRef } from "react";
import { Link } from 'react-router-dom';
import arrowDown from '../assets/cit club design/icon/arrow-down-svgrepo-com.svg';
import '../assets/css/Heading.css';
import '../assets/css/SideNavigation.css';

function Header() {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (
    <>
        <header className="header">
          <Link to="/">
            <div className="logo_style">
              <img src={require('../assets/img/logo-removebg-preview.png')} alt="cit club logo" className="logo_style" />
            </div>
          </Link>
      
            <nav ref={navRef} className="row_nav" >
              
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
                <div className="nav_column md-sc">
                    <li className="style_list display_drop"> <a href="/Resources">resources
                    </a>   
                    </li>  
                  <a  href="/Event"  className="style_list">events</a>
                  <a  href="/Gallary" className="style_list">gallery</a>
                  <a  href="/OurTeam" className="style_list">our team</a>
                  <a  href="/FindDeveloper" className="style_list">find developer</a> 
                  <a href="/SignUp">sign up</a>
                  <a href="/Login" className="btn_login_white">login</a>
                  <a href="/Registration">Join CIT CLuB</a>      
                </div>
                <button
              className="nav-btn nav-close-btn"
              onClick={showNavbar}>
              <i class="fa fa-times" aria-hidden="true" style={{fontSize:'30px',color:'white'}}></i>
            </button>
            </nav>
            
          
          <button className="nav-btn" onClick={showNavbar}>
            <i class="fa fa-bars" aria-hidden="true" style={{fontSize:'30px'}}></i>

          </button>
      </header>
    </>
  )
}

export default Header