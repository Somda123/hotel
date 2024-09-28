import React, { useState } from 'react';
import { Button } from '@mui/material';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


import './App.css';
const firebaseConfig = {
  apiKey: 'AIzaSyBIpZOhYPZRuROdbNp66gMCsgr7fJ8QJBw',
  authDomain: 'hotelbooking-b73a5.firebaseapp.com',
  projectId: 'hotelbooking-b73a5',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function Booking() {
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error('Sign In Error', error);
      });
  };

  const handlePayment = () => {
    const options = {
      // key: 'rzp_test_tRDG5uVixGXhPm',
      key: 'rzp_test_8BWLykZxQJXYDo',
      amount: 50000, // Amount in paise
      currency: 'INR',
      name: 'Hotel Booking',
      description: 'Room booking payment',
      handler: function (response) {
        alert('Payment successful: ' + response.razorpay_payment_id);
        // navigator('/roomgrid')
      },
      prefill: {
        email: user.email,
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className='App'>
      {user ? (
        <Button variant="contained" onClick={handlePayment}>
          Pay Now
        </Button>
      ) : (
        <Button variant="contained" onClick={handleSignIn}>
          Sign In to Book
        </Button>
      )}
    </div>
  );
}

export default Booking;

























// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBIpZOhYPZRuROdbNp66gMCsgr7fJ8QJBw",
//   authDomain: "hotelbooking-b73a5.firebaseapp.com",
//   databaseURL: "https://hotelbooking-b73a5-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "hotelbooking-b73a5",
//   storageBucket: "hotelbooking-b73a5.appspot.com",
//   messagingSenderId: "226769863591",
//   appId: "1:226769863591:web:70d0241b5bea8b7c8a2c82",
//   measurementId: "G-8VZK112XMK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);