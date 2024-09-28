// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// // const roomRoutes = require('./routes/rooms');
// const roomRoutes = require('./routes/roomRoutes.js')
// // const bookingRoutes = require('./routes/bookings');
// const bookingRoutes = require('./routes/bookingRoutes.js');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(error => console.error('MongoDB connection error:', error));

// app.use('/api/rooms', roomRoutes);
// app.use('/api/bookings', bookingRoutes);

// const PORT = process.env.PORT || 27017;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // require('dotenv').config();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // MongoDB connection
// // mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log('Connected to MongoDB'))
// //   .catch((error) => console.error('Error connecting to MongoDB:', error));

// // // Room Schema
// // const roomSchema = new mongoose.Schema({
// //   type: String,
// //   images: [String],
// //   isBooked: { type: Boolean, default: false }
// // });

// // const Room = mongoose.model('Room', roomSchema);

// // // Get rooms
// // app.get('/api/rooms', async (req, res) => {
// //   try {
// //     const rooms = await Room.find();
// //     res.json(rooms);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error fetching rooms' });
// //   }
// // });

// // // Book a room
// // app.post('/api/book', async (req, res) => {
// //   const { roomId } = req.body;

// //   try {
// //     const room = await Room.findById(roomId);
// //     if (room.isBooked) {
// //       return res.status(400).json({ message: 'Room already booked' });
// //     }

// //     room.isBooked = true;
// //     await room.save();

// //     res.json({ message: 'Room booked successfully' });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error booking room' });
// //   }
// // });

// // // Start server
// // const PORT = process.env.PORT || 27027;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });











// // // server.js
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const dotenv = require('dotenv');

// // dotenv.config();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // Connect to MongoDB
// // mongoose
// //   .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log('Connected to MongoDB'))
// //   .catch((error) => console.error('MongoDB connection error:', error));

// // // Room model
// // const RoomSchema = new mongoose.Schema({
// //   type: String,
// //   images: [String],
// // });

// // const Room = mongoose.model('Room', RoomSchema);

// // // Get all rooms
// // app.get('/api/rooms', async (req, res) => {
// //   try {
// //     const rooms = await Room.find();
// //     res.json(rooms);
// //   } catch (error) {
// //     res.status(500).send('Server Error');
// //   }
// // });

// // // Booking endpoint (Add your booking logic here)
// // app.post('/api/book', async (req, res) => {
// //   const { roomId } = req.body;
// //   try {
// //     // Implement booking logic, e.g., update room availability
// //     res.status(200).send('Room booked successfully');
// //   } catch (error) {
// //     res.status(500).send('Booking failed');
// //   }
// // });

// // // Server listening
// // const PORT = process.env.PORT || 27017;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });






// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase'); 
// //   {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // User schema and model
// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// // Sign-In Route
// app.post('/api/signin', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: 'User not found' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT for session handling
//     const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');

//     res.status(200).json({ message: 'Sign-in successful', token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// // Start the server
// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });












// //............

// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // User schema and model
// const userSchema = new mongoose.Schema({
//   email: { type: String, unique: true }, // Ensure email is unique
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// // Sign-Up Route
// app.post('/api/signup', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already in use' });
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({ email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'Sign-up successful', userId: newUser._id });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// // Sign-In Route
// app.post('/api/signin', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: 'User not found' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT for session handling
//     const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');

//     res.status(200).json({ message: 'Sign-in successful', token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// // Start the server
// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });






// ///............

// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((err) => console.log('Failed to connect to MongoDB:', err));

// // User schema and model
// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const User = mongoose.model('User', userSchema);

// // Sign-Up Route
// app.post('/api/signup', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create and save the new user
//     const newUser = new User({
//       email,
//       password: hashedPassword,
//     });
//     await newUser.save();

//     // Optionally generate a token if needed for session handling
//     const token = jwt.sign({ userId: newUser._id }, 'your_jwt_secret');

//     res.status(201).json({ message: 'Sign-up successful', token });
//   } catch (error) {
//     console.error('Error during sign-up:', error);
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// // Sign-In Route
// app.post('/api/signin', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: 'User not found' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT for session handling
//     const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');

//     res.status(200).json({ message: 'Sign-in successful', token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// // Start the server
// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });





////................
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Failed to connect to MongoDB:', err));

// User schema and model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Sign-Up Route
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });
    await newUser.save();

    // Optionally generate a token if needed for session handling
    const token = jwt.sign({ userId: newUser._id }, 'your_jwt_secret');

    // Send a JSON response with a token and message
    return res.status(201).json({ message: 'Sign-up successful', token });
  } catch (error) {
    console.error('Error during sign-up:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Sign-In Route
app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT for session handling
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');

    res.status(200).json({ message: 'Sign-in successful', token });
  } catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
