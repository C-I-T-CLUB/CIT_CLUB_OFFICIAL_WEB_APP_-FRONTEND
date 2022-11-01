import * as React from 'react';
import '../assets/css/Resources.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar'


export default function Resources() {
  return (
    <>
      <Header />
      <div className="main">
        <Sidebar />
        <div className="container">
          <h1 className="title">Resources</h1>
          <p className="info">in progress...</p>
          <button className="btn">Explore now</button>
        </div>
      </div>
    </>
  );
}
