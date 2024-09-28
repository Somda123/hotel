import React from 'react';
import { Grid, Button } from '@mui/material';
import ImageSlider from './ImageSlider'; 
import { useNavigate } from 'react-router-dom';
import './Compo.css'
const rooms = [
  { id: 1, type: 'AC Room', images: ['/images/images.png', '/images/noneac-1.jpeg', 'images/noneac-2.jpg','images/vip-1.jpg'] },
  { id: 2, type: 'AC Room', images: ['/images/images.png', '/images/noneac-1.jpeg', 'images/noneac-2.jpg','images/vip-1.jpg'] },
  { id: 3, type: 'AC Room', images: ['/images/images.png', '/images/noneac-1.jpeg', 'images/noneac-2.jpg','images/vip-1.jpg'] },
  { id: 4, type: 'AC Room', images: ['/images/images.png', '/images/noneac-1.jpeg', 'images/noneac-2.jpg','images/vip-1.jpg'] },
  { id: 5, type: 'Non-AC Room', images: ['images/noneac-2.jpg','images/vip-1.jpg','/images/images.png', '/images/noneac-1.jpeg'] },
  { id: 6, type: 'Non-AC Room', images: ['images/noneac-2.jpg','images/vip-1.jpg','/images/images.png', '/images/noneac-1.jpeg'] },
  { id: 7, type: 'Non-AC Room', images: ['images/noneac-2.jpg','images/vip-1.jpg','/images/images.png', '/images/noneac-1.jpeg'] },
  { id: 8, type: 'Non-AC Room', images: ['images/noneac-2.jpg','images/vip-1.jpg','/images/images.png', '/images/noneac-1.jpeg'] },
  // { id: 9, type: 'Non-AC Room', images: ['images/noneac-2.jpg','images/vip-1.jpg','/images/images.png', '/images/noneac-1.jpeg'] },
  // { id: 2, type: 'AC Room', images: ['/components/vip-1.jpg', '/room2.jpg'] },
  // { id: 3, type: 'AC Room', images: ['/components/vip-1.jpg', '/room2.jpg'] },
  // { id: 4, type: 'AC Room', images: ['/components/vip-1.jpg', '/room2.jpg'] },
  // { id: 5, type: 'Non-AC Room', images: ['/room3.jpg', '/room4.jpg'] },
  // { id: 6, type: 'Non-AC Room', images: ['/room3.jpg', '/room4.jpg'] },
  // { id: 7, type: 'Non-AC Room', images: ['/room3.jpg', '/room4.jpg'] },
  // { id: 8, type: 'Non-AC Room', images: ['/room3.jpg', '/room4.jpg'] },
  // Add more rooms as needed
];


function RoomGrid() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBooking = (roomId) => {
    // Navigate to the Sign-In/Sign-Up page
    navigate('/signin'); // Adjust the path as needed
  };

  return (
    <Grid className='rom' container spacing={2} padding={2}>
      {rooms.map((room) => (
        <Grid item xs={12} sm={6} md={3} key={room.id}>
          <ImageSlider images={room.images} />
          <h3>{room.type}</h3>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleBooking(room.id)} // Change here
          >
            Book Now
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default RoomGrid;


































// import React from 'react';
// import { Grid, Button } from '@mui/material';
// import ImageSlider from './ImageSlider'; // Assume you have created an ImageSlider component
// import './Compo.css';

// // Corrected room data with unique IDs
// const rooms = [
//   { id: 1, type: 'AC Room', images: ['noneac-2.jpg', '/room2.jpg', '/room3.jpg', '/room4.jpg'] },
//   { id: 2, type: 'VIP AC Room', images: ['/components/vip-1.jpg', '/room2.jpg'] },
//   { id: 3, type: 'Deluxe AC Room', images: ['/components/deluxe-1.jpg', '/room2.jpg'] },
//   { id: 4, type: 'Suite Room', images: ['/components/suite-1.jpg', '/room2.jpg'] },
//   { id: 5, type: 'Non-AC Room', images: ['/room3.jpg', '/room4.jpg'] },
// ];

// function RoomGrid() {
//   return (
//     <Grid className="rom" container spacing={2} padding={2}>
//       {rooms.map((room) => (
//         <Grid item xs={12} sm={6} md={3} key={`${room.id}-${room.type}`}>
//           <ImageSlider images={room.images} />
//           <h3>{room.type}</h3>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => {
//               // Add booking logic here
//               alert(`Booking for ${room.type}`);
//             }}
//           >
//             Book Now
//           </Button>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default RoomGrid;




 

// import React, { useEffect, useState } from 'react';
// import { Grid, Button } from '@mui/material';
// import ImageSlider from './ImageSlider'; // Ensure ImageSlider handles image array props correctly
// import axios from 'axios'; // For API calls
// import './Compo.css';

// // Sample room data; it will be fetched from the backend.
// const RoomGrid = () => {
//   const [rooms, setRooms] = useState([]);

//   // Fetch rooms from backend
//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const response = await axios.get('/api/rooms'); // Adjust API endpoint as necessary
//         setRooms(response.data);
//       } catch (error) {
//         console.error('Error fetching rooms:', error);
//       }
//     };

//     fetchRooms();
//   }, []);

//   const handleBooking = async (roomId) => {
//     try {
//       const response = await axios.post('/api/book', { roomId });
//       alert('Booking successful!');
//     } catch (error) {
//       console.error('Error booking room:', error);
//       alert('Booking failed. Please try again.');
//     }
//   };

//   return (
//     <Grid className="rom" container spacing={2} padding={2}>
//       {rooms.map((room) => (
//         <Grid item xs={12} sm={6} md={3} key={room._id}>
//           <ImageSlider images={room.images} />
//           <h3>{room.type}</h3>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleBooking(room._id)}
//           >
//             Book Now
//           </Button>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default RoomGrid;













// // RoomGrid.js
// import React, { useEffect, useState } from 'react';
// import { Grid, Button } from '@mui/material';
// import ImageSlider from './ImageSlider';
// import './Compo.css';

// // import seedRooms from './components/RoomGrids';

// function RoomGrid() {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/rooms')
//       .then((response) => response.json())
//       .then((data) => setRooms(data))
//       .catch((error) => console.error('Error fetching rooms:', error));
//   }, []);

//   const handleBooking = (roomId) => {
//     fetch('http://localhost:5000/api/book', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ roomId }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           alert('Room booked successfully');
//         } else {
//           alert('Booking failed');
//         }
//       })
//       .catch((error) => console.error('Error booking room:', error));
//   };

//   return (
//     <Grid className='rom' container spacing={2} padding={2}>
//       {rooms.map((room) => (
//         <Grid item xs={12} sm={6} md={3} key={room._id}>
//           <ImageSlider images={room.images} />
//           <h3>{room.type}</h3>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleBooking(room._id)}
//           >
//             Book Now
//           </Button>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default RoomGrid;
