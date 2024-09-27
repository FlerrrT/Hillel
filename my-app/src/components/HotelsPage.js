import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material';

const HotelsPage = () => {
  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHotels, setFilteredHotels] = useState([]);
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:3001/hotels');
        setHotels(response.data);
        setFilteredHotels(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке отелей:', error);
      }
    };

    fetchHotels();
  }, []);

  useEffect(() => {
    const results = hotels.filter(hotel =>
      hotel.city && hotel.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHotels(results);
  }, [searchTerm, hotels]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Available Hotels
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <TextField
          label="Search by City"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          sx={{ marginRight: '1rem' }}
        />
        <Button variant="contained" onClick={() => setSearchTerm('')}>Clear</Button>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredHotels.map(hotel => (
          <Card key={hotel.id} sx={{ margin: '1rem', maxWidth: 300 }}>
            <Box
              sx={{
                width: 140,
                height: 140,
                backgroundColor: '#f0f0f0', // Серый фон
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
              }}
            >
              <Box
                component="img"
                src={hotel.image_url || 'placeholder-image-url'} 
                alt={hotel.name}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
            <CardContent>
              <Typography variant="h6">{hotel.name}</Typography>
              <Typography color="textSecondary">{hotel.address}</Typography>
              <Typography color="textSecondary">{hotel.city}</Typography>
              <Typography color="textSecondary">Rating: {hotel.hotel_rating}</Typography>
              <Typography color="textSecondary">Phone: {hotel.phone_number || 'N/A'}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default HotelsPage;