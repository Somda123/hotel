
import './App.css';
// import './components/ImageSlider.css';
import './ImageSlider.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import RoomGrid from './RoomGrid';
import Footer from './Footer';
import Booking from './Booking';
import SignIn from './SignIn';
import SignUp from './SignUp';
import About from './About';
import Term from './Terms';
import BookingForm from './BookingForm';
function App() {
  return (
    <Router>
      <Header />
      <h1 className="App1" >Welcome to [Circuit House Dantewada]</h1>
      <p className="App">Your comfort is our priority. Book your room now!</p>
      <Routes class="App">
        <Route path="/" element={<RoomGrid />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/term" element={<Term />} />
        <Route path="/bookingform" element={<BookingForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
