import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); 

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Booking
        </Typography>
        <Button color="inherit" onClick={() => navigate('/')}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate('/about')}>
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;