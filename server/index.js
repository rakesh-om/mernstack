const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Successfully connected to MongoDB'))
.catch((error) => console.error('❌ Failed to connect to MongoDB:', error));

// Route imports
const profileRoutes = require('./routes/profile');
const contactRoutes = require('./routes/contact');

// Route usage
app.use('/api/profiles', profileRoutes);
app.use('/api/contact', contactRoutes);

// Default route
app.get('/', (req, res) => res.send('🌐 API is up and running'));

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is live at: http://localhost:${PORT}`);
});
