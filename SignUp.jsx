// import React, { useState } from 'react';
// import { TextField, Button } from '@mui/material';

// function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = (event) => {
//     event.preventDefault();
//     // Submit the email and password to your backend
//     console.log('Signed up:', email, password);
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignUp}>
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
//           Sign Up
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;






///..........................
// import React, { useState } from 'react';
// import { TextField, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';


// function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // use for redirection

//   const handleSignUp = async (event) => {
//     event.preventDefault();

//     const signUpData = { email, password };
//    console.log(signUpData); // console 
//     try {
//       // Send the data to the backend
//       const response = await fetch('/api/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(signUpData),
//       });

//        console.log(response);
//       const data = await response.json();

//       if (response.ok) {
//         console.log('Sign-up successful:', data);
//         // Clear input fields
//         setEmail('');
//         setPassword('');

//         // Redirect to RoomGrid.js after successful sign-up
//         // navigate('/RoomGrid');
//         navigate('/roomgrid');
//       } else {
//         console.error('Sign-up failed:', data.message);
//         alert('Sign-up failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during sign-up:', error);
//       alert('An error occurred while signing up.');
//       // navigate('/roomgrid');

//     }
//   };


//   // function handlesignup(){
//   //   navigate('/roomgrid')
//   //   alert("Successfully SignUped")

//   // }

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignUp}>
//         <TextField
//           label="Email"
//           type="email"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <TextField
//           label="Password"
//           type="password"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Sign Up
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;




import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // use for redirection

  const handleSignUp = async (event) => {
    event.preventDefault();

    const signUpData = { email, password };
    console.log(signUpData); // console log for debugging

    try {
      // Send the data to the backend
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signUpData),
      });

      // Check if the response is valid JSON and handle errors properly
      let data;
      try {
        data = await response.json();
      } catch (error) {
        console.error('Failed to parse JSON:', error);
        alert('Failed to parse response from server.');
        return;
      }

      if (response.ok) {
        console.log('Sign-up successful:', data);
        // Clear input fields
        setEmail('');
        setPassword('');

        // Redirect to RoomGrid.js after successful sign-up
        navigate('/roomgrid');
      } else {
        console.error('Sign-up failed:', data.message);
        alert(`Sign-up failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      alert('An error occurred while signing up.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <TextField
          label="Email"
          type="email"
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
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
