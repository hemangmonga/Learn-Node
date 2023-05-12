// server.js
const express = require('express');
const path = require('path')
// Create an instance of Express
const app = express();

const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const chapterRoutes = require('./routes/chapterRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/chapter', chapterRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './templates/login.html'));
  
})

// Connect to MongoDB
const dbURI = 'mongodb+srv://hemangmonga:Hzqo57CWUqYdCiGv@cluster0.tyicw4j.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));