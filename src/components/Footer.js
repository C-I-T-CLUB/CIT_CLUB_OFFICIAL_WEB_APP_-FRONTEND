import React from 'react'
import '../assets/css/Footer.css';

function Footer() {
  return (
    <>
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

export default Footer