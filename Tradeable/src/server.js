// server.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const { requireAuth } = require('./middlewares/authMiddleware');

// Create an instance of Express
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
const dbURI = 'mongodb://localhost/tradingAppDB';
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


// Protected route - require authentication
app.get('/api/chapters', requireAuth, (req, res) => {
  // Return the list of chapters
  const chapters = ['Chapter 1', 'Chapter 2', 'Chapter 3'];
  res.json(chapters);
});

// Protected route - require authentication
app.get('/api/chapters/:chapterId', requireAuth, (req, res) => {
  const chapterId = req.params.chapterId;
  // Return the details of the specified chapter
  const chapter = {
    id: chapterId,
    title: `Chapter ${chapterId}`,
    content: 'Chapter content goes here',
  };
  res.json(chapter);
});

// Protected route - require authentication
app.get('/api/chapters/:chapterId/quiz', requireAuth, (req, res) => {
  const chapterId = req.params.chapterId;
  // Return the quiz for the specified chapter
  const quiz = {
    chapterId,
    questions: [
      { question: 'Question 1', choices: ['Choice 1', 'Choice 2', 'Choice 3'] },
      { question: 'Question 2', choices: ['Choice 1', 'Choice 2', 'Choice 3'] },
    ],
  };
  res.json(quiz);
});

