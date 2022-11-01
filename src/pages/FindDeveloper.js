import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import "../assets/css/FindDeveloper.css"
import DeveloperProfile from '../components/DeveloperProfile';

function FindDeveloper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='root'>
      <div className="container" style={{overflowX:'hidden'}}>
        <div className="row">
          {/* header menu */}
          <div className="header-menu">
            <div className="nav_logo">
              <Link to="/">
                <img src={require('../assets/img/logo-removebg-preview.png')} alt="cit club logo" className="logo_style" />
              </Link>
            </div>
            <div className="nav_menu">
              
              <MenuIcon
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ fontSize: "40px", cursor: "pointer" }}
              >
              </MenuIcon>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                PaperProps={{sx: {width: '200px',color:'red'}}}
                style={{ marginTop: "20px" }}
              >
                <MenuItem onClick={handleClose} style={{fontSize:20}}>Profile</MenuItem>
                <MenuItem onClick={handleClose} style={{fontSize:20}}>My account</MenuItem>
                <MenuItem onClick={handleClose} style={{fontSize:20}}>Logout</MenuItem>
              </Menu>
            </div>  
            
          </div>
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