import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import "../assets/css/FindDeveloper.css"

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
    <>
      <div className="container">
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
                style={{ marginTop: "20px" }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>  
            
          </div>
          <div className="col-md-12 mt">
            <h1>Find Developer</h1>
          </div>
        </div>
      </div>  
    </>
  )
}

export default FindDeveloper