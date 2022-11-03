import React from 'react'
import "../assets/css/FindDeveloper.css"
import DeveloperProfile from '../components/DeveloperProfile';

function FindDeveloper() {
  
  return (
    <div className='root'>
      <div className="container" style={{overflowX:'hidden'}}>
        <div className="row">
          
          <div className="col-md-12 mt">
            <div className="search">
              <div className="underline">
                <h1>Find Developer</h1>
              </div>
              <div class="input-group">
                <div class="form-outline" style={{width:'60%'}}>
                  <input type="search" id="form1" class="form-control" />
                  <label class="form-label" for="form1">Search</label>
                </div>
                <button type="button" class="btn btn-primary">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>  
          </div>
          <div className="col-md-12 mt grid" > 
            <DeveloperProfile /> 
            <DeveloperProfile />
            <DeveloperProfile /> 
            <DeveloperProfile />
            <DeveloperProfile /> 
            <DeveloperProfile />
            <DeveloperProfile /> 
            <DeveloperProfile />
          </div>
        </div>
      </div>  
    </div>
  )
}

export default FindDeveloper