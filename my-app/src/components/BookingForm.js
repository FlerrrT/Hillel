import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Button, Box, Typography, Card, CardContent, CardActions } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:3001/hotels', values);
      console.log('Ответ от сервера:', response.data);
      // Здесь вы можете обновить логику навигации
      navigate('/hotels', { state: { searchParams: values } });
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Card sx={{ maxWidth: 600, width: '100%', padding: '2rem', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Book Your Stay
          </Typography>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ marginBottom: '1.5rem' }}>
                  <Field name="destination">
                    {({ input }) => (
                      <TextField
                        {...input}
                        label="Destination"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    )}
                  </Field>
                </Box>
                <Box sx={{ marginBottom: '1.5rem' }}>
                  <Field name="checkin">
                    {({ input }) => (
                      <TextField
                        {...input}
                        label="Check-in Date"
                        type="date"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        required
                      />
                    )}
                  </Field>
                </Box>
                <Box sx={{ marginBottom: '1.5rem' }}>
                  <Field name="checkout">
                    {({ input }) => (
                      <TextField
                        {...input}
                        label="Check-out Date"
                        type="date"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        required
                      />
                    )}
                  </Field>
                </Box>
                <Box sx={{ marginBottom: '1.5rem' }}>
                  <Field name="guests">
                    {({ input }) => (
                      <TextField
                        {...input}
                        label="Guests"
                        type="number"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    )}
                  </Field>
                </Box>
                <CardActions>
                  <Button variant="contained" color="primary" fullWidth type="submit">
                    Send
                  </Button>
                </CardActions>
              </form>
            )}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default BookingForm;