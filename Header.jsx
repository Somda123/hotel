
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
// import SignIn from '/SignIn'
// import SignUp from '/SignUp';


function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [roomsAnchorEl, setRoomsAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRoomsMenuClick = (event) => {
    setRoomsAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setRoomsAnchorEl(null);
  };


  
  const handleTerms = () => {
    navigate('/term')
  };

  const handleAbout = () => {
    navigate('/about')
  //  return <h4>this is circuit house in Dantewada</h4>
  };


  const handleSignIn = () => {
    // Navigate to the Sign-In page (placeholder for actual Google Sign-In)
    navigate('/signin');
  };

  const handleSignUp = () => {
    // Navigate to the Sign-Up page (placeholder for actual Google Sign-Up)
    navigate('/signup');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            <img
              src="/images/vip-2.jpeg"
              alt="Logo"
              style={{ height: '70px', width: '70px', borderRadius: '50px', margin: '5px' }}
            />
          </Link>
        </Typography>

        {/* Main Menu */}
        <Button
          color="inherit"
          onClick={handleMenuClick}
          startIcon={<MenuIcon />}
        >
          Menu
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleAbout}>About</MenuItem>
          <MenuItem onClick={handleTerms}>Terms & Conditions</MenuItem>
          {/* Rooms Dropdown */}
          <MenuItem onClick={handleRoomsMenuClick}>
            Rooms
          </MenuItem>
        </Menu>

        {/* Rooms Submenu */}
        <Menu
          anchorEl={roomsAnchorEl}
          open={Boolean(roomsAnchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>AC Rooms</MenuItem>
          <MenuItem onClick={handleClose}>Non-AC Rooms</MenuItem>
        </Menu>

        {/* SignIn/SignUp */}
        <Button color="inherit" onClick={handleSignIn}>
          Sign In
        </Button>
        <Button color="inherit" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header ;



