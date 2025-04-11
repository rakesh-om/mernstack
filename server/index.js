const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Base route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Routes
const projectRoutes = require('./routes/projects');
const profileRoutes = require('./routes/profile');
const contactRoute = require('./routes/contact');

app.use('/api/projects', projectRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/contact', contactRoute);

// Start server
app.listen(PORT, () => 
  console.log('\x1b[36m%s\x1b[0m', `🚀 Server running at http://localhost:${PORT}`)
);
