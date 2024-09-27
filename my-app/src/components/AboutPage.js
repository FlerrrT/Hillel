import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h3" gutterBottom>About Us</Typography>
      <Typography variant="body1">
        We are a leading booking service that offers the best hotels at competitive prices. Our mission is to make travel easier and more enjoyable for everyone.
      </Typography>
    </Container>
  );
};

export default AboutPage;