import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import BookingForm from './components/BookingForm';
import HotelsPage from './components/HotelsPage';
import { Container } from '@mui/material';
import Header from './components/Header';
const App = () => {
  return (
    <Router>
      <Header /> {/* Вставьте компонент Header */}
      <Container maxWidth="lg">
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/hotels" element={<HotelsPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;