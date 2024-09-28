import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './App.css'
function BookingForm() {
  const [roomType, setRoomType] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
console.log(event);

    // Gather the booking details
    const bookingData = {
      roomType,
      checkInDate,
      checkOutDate,
      name,
      phone,
      email,
    };

    try {
      // Send the booking data to the backend
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Booking successful:', data);

        // Clear the form
        setRoomType('');
        setCheckInDate('');
        setCheckOutDate('');
        setName('');
        setPhone('');
        setEmail('');

        // Navigate to a confirmation or success page
        navigate('/booking-confirmation');
      } else {
        console.error('Booking failed:', data.message);
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('An error occurred while submitting the booking.');
    }
  };

   function handlesumited(){
    navigate('/booking')
  }
  

  return (
    <div>
      <h1 className='App'>Room Booking Details</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          select
          label="Room Type"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          fullWidth
          margin="normal"
          required
        >
          <MenuItem value="AC">AC Room</MenuItem>
          <MenuItem value="Non-AC">Non-AC Room</MenuItem>
        </TextField>

        <TextField
          label="Check-in Date"
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
        />

        <TextField
          label="Check-out Date"
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
        />

        <TextField
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Phone Number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required
        />

        <Button type="submit" variant="contained" color="primary" fullWidth onClick={handlesumited}>
          Submit Booking
        </Button>
      </form>
    </div>
  );
}

export default BookingForm;
