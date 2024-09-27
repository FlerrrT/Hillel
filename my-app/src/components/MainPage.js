import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>Welcome to Booking Service</Typography>
      <Typography variant="body1" gutterBottom>
        Explore and book the best hotels with just a few clicks.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/booking">
        Start Booking
      </Button>
    </Container>
  );
};

export default MainPage;