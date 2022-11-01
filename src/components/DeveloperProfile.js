import React from 'react'
import "../assets/css/FindDeveloper.css"


function DeveloperProfile() {
  return (
    <div className="card">
        <div className="card-body">
            <div className="row">
                <div className="col-md-4 socials">
                    <img src="https://picsum.photos/300/300?random=7" alt="profile" className="img-fluid" />
                    <div className="social-icons">
                        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.github.com/" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-md-8 details">
                    <h3>John Doe</h3>
                    <span>Python</span>
                    <p style={{fontWeight:'bold'}}>Basic Information</p>
                    <span>John Doe is a Python Developer. He is a graduate of Computer Science from the University of Lagos. He has been a Python Developer for 5 years. He is a member of the Python Developers Association of Nigeria.</span>
                    <a href="#" className="btn btn-primary" style={{marginTop:'15px'}}>Contact Developer</a>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default DeveloperProfile