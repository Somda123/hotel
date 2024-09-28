
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // For navigation after sign-in

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // For navigation

  const handleSignIn = async (event) => {
    event.preventDefault(); // Prevent default form submission



    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Sign-in successful:', data);
        
        // Clear input fields after submission
        setEmail('');
        setPassword('');

        // Redirect to another form or page after successful sign-in
        // navigate('/next-form');
        // navigate('/booking');
      } else {
        console.error('Sign-in failed:', data.message);
        alert('Sign-in failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      alert('An error occurred during sign-in.');
    }

  };


  
  const handlebook = (event) => {
    // navigate('/booking')
    if(event){
      console.log(event)
      navigate('/bookingform')

    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <TextField
          label="Email"
          type='email'
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" onClick={handlebook}>
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default SignIn;














































// import React, { useState } from 'react';
// import { TextField, Button } from '@mui/material';

// function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = (event) => {
//     // event.preventDefault();

//     // Submit the email and password to your backend
//     // Example: fetch('/api/signin', { method: 'POST', body: JSON.stringify({ email, password }) })
//     // console.log('Signed in:', email, password);

//     const userData = { email, password };
//     console.log('Submitting:', userData);
//     // clear data after submission
//     setEmail('');
//     setPassword('');
//     alert("successfully Submited")

//     // Redirect to another form or page after successful sign-in
//     // navigate('/next-form');
//   };

//   return (
//     <div>
//       <h2>Sign In</h2>
//       <form onSubmit={handleSignIn}>
//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <TextField
//           label="Password"
//           type="password"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Sign In
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default SignIn;


