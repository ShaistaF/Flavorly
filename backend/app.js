const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipes');
const blogRoutes = require('./routes/blog');
const searchRoutes = require('./routes/search');
require('dotenv').config();

const app = express();
app.use(express.json());

// API Routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/search', searchRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error: ", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
