import * as React from 'react';
import '../assets/css/Resources.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar'
import arrowBack from '../assets/cit club design/icon/arrow-right-circle-svgrepo-com 2.svg';
import rectangle from '../assets/cit club design/icon/Rectangle 27.svg';


export default function Resources() {
  return (
    <>
      <Header />
      <div className="main">
        <Sidebar />
        <div className="container">
          <div className='leading'>
            <img src={arrowBack} alt="arrow-back" />
            <h3>Choose your course</h3>
          </div>
          <div className="courses">
            <div className="course">
              <img src={rectangle} alt="rectangle" />
              <h3>Computer Science</h3>
            </div>
            <div className="course">
              <img src={rectangle} alt="rectangle" />
              <h3>Computer Science</h3>
            </div>
            <div className="course">
              <img src={rectangle} alt="rectangle" />
              <h3>Computer Science</h3>
            </div>
            <div className="course">
              <img src={rectangle} alt="rectangle" />
              <h3>Computer Science</h3>
            </div>
          </div>  
        </div>
      </div>
    </>
  );
}
