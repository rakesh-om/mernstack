const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Profile = require('./models/profile'); // Import profile model
const mailRoutes = require('./routes/mail'); // Import mail routes
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Use the mail routes
app.use('/api/mail', mailRoutes);

// GET route to fetch profile data
app.get('/api/profile', async (req, res) => {
  try {
    const profile = await Profile.findOne(); // Fetching the first profile
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch profile data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
